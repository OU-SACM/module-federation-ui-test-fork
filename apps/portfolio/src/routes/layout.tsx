import './index.css';
import { Outlet } from '@modern-js/runtime/router';

export default function Layout() {
  return (
    <div className="h-dvh w-dvw">
      <Outlet />
    </div>
  );
}
