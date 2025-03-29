export const handleLogout = async () => {
    try {
        const response = await fetch('http://localhost:3000/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });

        console.log('Response status:', response.status);

        if (response.ok) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
            console.log('Logout successful');
            window.location.href = '/login';
        } else {
            console.error('Logout failed');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};