import { Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <>
            <div>Header</div>
            <Outlet />
            <div>Footer</div>
        </>
    )
}
