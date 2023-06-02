import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

import { CalendarApp } from "./CalendarApp/Calendar";
import { TodoLis } from "./TodoList/TodoList";
import { ListTaskMonth } from "./ListMonthTask/ListTaskMonth";
import { ListTaskMonthDay } from "./ListTaskMonthDay/ListTaskMonthDay";

export const ROUTES = {
  home: "/",
  calendar: "/calendar",
  calendar_month: "/calendar/:month/",
  calendar_month_day: "/calendar/:month/:day",
};

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <TodoLis />,
  },
  {
    path: ROUTES.calendar,
    element: <CalendarApp />,
  },
]);

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.calendar} element={<CalendarApp />} />
      <Route path={ROUTES.calendar_month} element={<ListTaskMonth />} />
      <Route path={ROUTES.calendar_month_day} element={<ListTaskMonthDay />} />
      <Route path={ROUTES.home} element={<TodoLis />} />
    </Routes>
  );
};
