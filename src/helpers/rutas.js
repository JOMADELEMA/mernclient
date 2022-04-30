const RUTAS = {
    home: '/',
    login: '/login',
    register: '/register',
    account: '/account',
    projects: '/projects',
    project: (projectId) => (projectId? `/project/:${projectId}` : `/project/:projectId`),
}

export default RUTAS;