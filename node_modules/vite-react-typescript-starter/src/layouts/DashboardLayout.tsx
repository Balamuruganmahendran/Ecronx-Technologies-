import { ReactNode } from 'react';
import { LayoutDashboard, Users, Settings, LogOut } from 'lucide-react';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Users, label: 'Users', path: '/dashboard/users' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="flex items-center px-6 py-3 hover:bg-gray-800 transition-colors"
            >
              <item.icon size={20} className="mr-3" />
              {item.label}
            </a>
          ))}

          <button className="flex items-center w-full px-6 py-3 hover:bg-gray-800 transition-colors mt-auto">
            <LogOut size={20} className="mr-3" />
            Logout
          </button>
        </nav>
      </aside>

      <main className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
