import { DEV_DASHBOARD_HOME } from './pagesPaths';
import withSuspense from 'components/HOC/withSuspense';

export const generalRoutes = [
    {
        path:  DEV_DASHBOARD_HOME,
        component: withSuspense({ page: "authPages/estateDevelopers/Home" }),
        exact: true,
    }
]