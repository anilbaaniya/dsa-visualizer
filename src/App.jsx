import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Stack from "./pages/Stack";
import Queue from "./pages/Queue";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import Postfix from "./pages/Postfix";
import Prefix from "./pages/Prefix";
import LinearQueue from "./pages/LinearQueue";
import CircularQueue from "./pages/CircularQueue";
import Quiz from "./pages/Quiz";
import StackQuiz from "./features/Quiz/StackQuiz";
import QueueQuiz from "./features/Quiz/QueueQuiz";
import QuizFinishScreen from "./pages/QuizFinishScreen";
import QuizProvider from "./features/Quiz/QuizContext";
import Deque from "./pages/Deque";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<HomePage />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="stack" element={<Stack />} />
            <Route path="queue" element={<Queue />} />
            <Route path="postfix" element={<Postfix />} />
            <Route path="prefix" element={<Prefix />} />
            <Route path="linearQueue" element={<LinearQueue />} />
            <Route path="circularQueue" element={<CircularQueue />} />
            <Route path="deque" element={<Deque />} />
            <Route path="quiz" element={<Quiz />} />
            <Route
              element={
                <QuizProvider>
                  <Outlet />
                </QuizProvider>
              }
            >
              <Route path="quiz/:topic" element={<StackQuiz />} />
              <Route path="finishScreen" element={<QuizFinishScreen />} />
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          style: {
            fontWeight: 600,
            fontSize: "1.2rem",
            padding: "8px 20px",
          },
          success: {
            duration: 2000,
          },
          error: {
            duration: 2000,
          },
        }}
      />
    </>
  );
}
