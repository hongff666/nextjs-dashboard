import {
  fetchRevenue,
  fetchLatestInvoices,
  fetchCardData,
} from '@/app/lib/data';

export default async function Page() {
  const revenue = await fetchRevenue();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <p>Customers Page</p>;
}
