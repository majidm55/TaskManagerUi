import api from "../api";

export default async function getAllTasks(
  pageNumber: number = 1,
  pageSize: number = 10
) {
  const res = await api.get(
    `tasks?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return res.data;
}
