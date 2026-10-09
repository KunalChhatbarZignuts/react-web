import type { User } from "./user.type";
interface UserCardProps {
  data: User[];
}
export default function UserCard({ data }: UserCardProps) {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.map((user) => (
        <div
          key={user.id}
          className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
        >
          {/* Avatar */}
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 text-xl font-bold text-white">
            {user.name.charAt(0)}
          </div>

          {/* User */}
          <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>

          <p className="text-sm text-gray-500">@{user.username}</p>

          {/* Details */}
          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>

          {/* Address */}
          <div className="mt-4 border-t border-gray-100 pt-4">
            <p className="text-sm font-semibold text-gray-700">
              {user.address.city}
            </p>

            <p className="text-xs text-gray-500">
              {user.address.street}, {user.address.suite}
            </p>
          </div>

          {/* Company */}
          <div className="mt-4 rounded-lg bg-gray-50 p-3">
            <p className="text-sm font-semibold text-gray-700">
              {user.company.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
