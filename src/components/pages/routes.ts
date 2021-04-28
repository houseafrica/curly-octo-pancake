import {
    DEV_DASHBOARD, 
    DEV_DASHBOARD_HOME,
    DEV_DASHBOARD_PROPERTIES,
    DEV_DASHBOARD_INDIV_ESTATES,
    DEV_DASHBOARD_ENQUIRIES,
    DEV_DASHBOARD_DUPLICATE_INQUIRIES
} from './pagesPaths';
import withSuspense from 'components/HOC/withSuspense';

export const generalRoutes = [
    {
        path:  DEV_DASHBOARD,
        component: withSuspense({ page: "authPages/estateDevelopers/Index" })
    }
]

//estate developers' screens
export const estateDevRoutes = [
    {
        path:  DEV_DASHBOARD_HOME,
        component: withSuspense({ page: "authPages/estateDevelopers/Home" }),
        exact: true
    },
    {
        path:  DEV_DASHBOARD_PROPERTIES,
        component: withSuspense({ page: "authPages/estateDevelopers/Properties" }),
        exact: true
    },
    {
        path:  DEV_DASHBOARD_INDIV_ESTATES,
        component: withSuspense({ page: "authPages/estateDevelopers/EachEstate" }),
        exact: true
    },
    {
        path:  DEV_DASHBOARD_ENQUIRIES,
        component: withSuspense({ page: "authPages/estateDevelopers/Enquiries" }),
        exact: true
    },
    {
        path:  DEV_DASHBOARD_DUPLICATE_INQUIRIES,
        component: withSuspense({ page: "authPages/estateDevelopers/DuplicateInquiries" }),
        exact: true
    }
    
]