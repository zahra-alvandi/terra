import { useState } from "react";

import { useEffect } from "react";
import { getUsers } from "@/services/userService";

export default function AdminCustomersPage() {
  const [search, setSearch] = useState("");

  const [customers, setCustomers] = useState<any[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getUsers();
        setCustomers(data);
      } catch (err) {
        console.error(err);
      }
    };
    
    loadUsers();
  }, []);

  const filteredCustomers = customers.filter((customer) => {
    const query = search.trim().toLowerCase();

    const fullName = `${customer.firstName} ${customer.lastName}`.toLowerCase();

    return (
      customer.phone.includes(query) ||
      customer.firstName.toLowerCase().includes(query) ||
      customer.lastName.toLowerCase().includes(query) ||
      fullName.includes(query)
    );
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">مشتریان</h1>

        <p className="mt-2 text-text-secondary">مدیریت مشتریان فروشگاه</p>
      </div>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="جستجوی مشتری..."
        className="w-full rounded-2xl border border-border p-4"
      />

      <div className="overflow-x-auto rounded-3xl border border-border bg-white">
        <table className="min-w-[900px] w-full">
          <thead className="bg-stone-50">
            <tr>
              <th className="px-6 py-4 text-right">نام</th>
              <th className="px-6 py-4 text-right">تلفن</th>
              <th className="px-6 py-4 text-right">تعداد سفارش</th>
              <th className="px-6 py-4 text-right">مجموع خرید</th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.phone} className="border-t border-border">
                <td className="px-6 py-5">
                  {customer.firstName} {customer.lastName}
                </td>

                <td className="px-6 py-5">{customer.phone}</td>

                <td className="px-6 py-5">{customer.totalOrders}</td>

                <td className="px-6 py-5">
                  {customer.totalSpent.toLocaleString()} تومان
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
