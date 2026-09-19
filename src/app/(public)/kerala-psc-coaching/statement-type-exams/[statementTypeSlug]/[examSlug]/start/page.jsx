import {
    notFound,
    redirect,
  } from "next/navigation";
  
  import {
    getStatementTypeTopics,
    getStatementTypeExamsByTopic,
    getStatementTypeExamDetails,
    getStatementTypeExamQuestions,
  } from "@/lib/statementTypeExamHelper";
  
  import ExamClient from "./components/ExamClient";
  
  function createSlug(value = "") {
    return String(value)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
  
  export default async function StatementTypeExamStartPage({
    params,
  }) {
    const {
      statementTypeSlug,
      examSlug,
    } = await params;
  
    const uid = 0;
    const cid = 1;
    const examType =
      "tst";
  
    /* =======================================================
       RESOLVE TOPIC
    ======================================================= */
  
    const topicsResult =
      await getStatementTypeTopics({
        uid,
        cid,
        type:
          examType,
      });
  
    const topics =
      Array.isArray(
        topicsResult?.data
      )
        ? topicsResult.data
        : [];
  
    const selectedTopic =
      topics.find(
        (item) =>
          createSlug(
            item?.subject
          ) ===
          statementTypeSlug
      );
  
    if (!selectedTopic) {
      notFound();
    }
  
    /* =======================================================
       RESOLVE EXAM
    ======================================================= */
  
    const examsResult =
      await getStatementTypeExamsByTopic({
        uid,
        topicId:
          selectedTopic.id,
        type:
          examType,
      });
  
    const exams =
      Array.isArray(
        examsResult?.data
      )
        ? examsResult.data
        : [];
  
    const selectedExam =
      exams.find(
        (item) =>
          createSlug(
            item?.exam_name
          ) ===
          examSlug
      );
  
    if (!selectedExam) {
      notFound();
    }
  
    if (
      String(
        selectedExam?.access ||
          ""
      ).toLowerCase() ===
      "paid"
    ) {
      redirect("/login");
    }
  
    const examId =
      selectedExam.id;
  
    /* =======================================================
       DETAILS + QUESTIONS
    ======================================================= */
  
    const [
      detailsResult,
      questionsResult,
    ] =
      await Promise.all([
        getStatementTypeExamDetails({
          uid,
          cid,
          examId,
          type:
            examType,
          offset: 0,
        }),
  
        getStatementTypeExamQuestions({
          uid,
          cid,
          examId,
          examType,
        }),
      ]);
  
    const exam =
      detailsResult?.exam;
  
    const questions =
      Array.isArray(
        questionsResult?.data
      )
        ? questionsResult.data
        : [];
  
    if (
      !exam ||
      !questionsResult?.status
    ) {
      notFound();
    }
  
    const normalizedExam = {
      ...exam,
  
      total_minutes:
        Number(
          exam?.total_minutes
        ) || 0,
    };
  
    return (
      <ExamClient
        exam={
          normalizedExam
        }
        questions={
          questions
        }
        imagePath={
          questionsResult?.imagePath ||
          ""
        }
        statementTypeSlug={
          statementTypeSlug
        }
        examSlug={
          examSlug
        }
      />
    );
  }