import api from "../api";

export default async function addTask(data: {
  title: string;
  status?: number;
}) {
  const res = await api.post(`/tasks/`, {
    title: data.title,
    status: data.status,
  });
  return res.data;
}
