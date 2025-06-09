import {useQuery} from '@tanstack/react-query'

export const fetchTenants = async () => {
  const response = await fetch('http://localhost:8080/api/tenants');
  if (!response.ok) throw new Error('Network response was not ok');
  return response.json();
};

