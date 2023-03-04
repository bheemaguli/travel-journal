import math
from datetime import datetime

from api.models import Journal
from api.serializers import JournalSerializer
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response

all = [
    'JournalEntry',
    'JournalEntryDetail'
]


class JournalEntry(generics.GenericAPIView):
    serializer_class = JournalSerializer
    queryset = Journal.objects.all()

    def get(self, request):
        page_num = int(request.GET.get("page", 1))
        limit_num = int(request.GET.get("limit", 10))
        start_num = (page_num - 1) * limit_num
        end_num = limit_num * page_num
        search_param = request.GET.get("search")
        journal = Journal.objects.all()
        total_journals = journal.count()
        if search_param:
            journal = journal.filter(title__icontains=search_param)
        serializer = self.serializer_class(journal[start_num:end_num], many=True)
        return Response(
            {
                "status": "success",
                "total": total_journals,
                "page": page_num,
                "last_page": math.ceil(total_journals / limit_num),
                "journals": serializer.data,
            }
        )

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"status": "success", "journal": serializer.data},
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(
                {"status": "fail", "message": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )


class JournalEntryDetail(generics.GenericAPIView):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer

    def get_journal(self, pk):
        try:
            Journal.objects.get(pk=pk)
        except:
            return None

    def get(self, request, pk):
        journal = self.get_journal(pk=pk)
        if journal == None:
            return Response(
                {"status": "fail", "message": f"Journal with Id: {pk} not found"},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = self.serializer_class(journal)
        return Response({"status": "success", "journal": serializer.data})

    def patch(self, request, pk):
        journal = self.get_journal(pk)
        if journal == None:
            return Response(
                {"status": "fail", "message": f"Journal with Id: {pk} not found"},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = self.serializer_class(journal, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.validated_data["updated_at"] = datetime.now()
            serializer.save()
            return Response({"status": "success", "journal": serializer.data})
        return Response(
            {"status": "fail", "message": serializer.errors},
            status=status.HTTP_400_BAD_REQUEST,
        )

    def delete(self, request, pk):
        journal = self.get_journal(pk)
        if journal == None:
            return Response(
                {"status": "fail", "message": f"Journal with Id: {pk} not found"},
                status=status.HTTP_404_NOT_FOUND,
            )

        journal.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
