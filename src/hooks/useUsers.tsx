import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../ api/reqREs";
import { ReqRespList, User } from "../interfaces/reqREs.interface";


export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([]);

    const pageRef = useRef(1);

    useEffect(() => {
        loadUsers();
    }, []);
    
    const loadUsers = async () => {        
        const resp = await reqResApi.get<ReqRespList>( '/users', {
            params: {
                page: pageRef.current
            }
        } );
        if ( resp.data.data.length > 0 ) {
            setUsers( resp.data.data );
        } else {
            pageRef.current --;
            alert( 'Sin registros' );
        }
    }

    const nextPage = () => {
        pageRef.current ++;
        loadUsers();
    }

    const previousPage = () => {
        if ( pageRef.current > 1 ) {
            pageRef.current --
            loadUsers();
        }
    }

    return {
        users,
        nextPage,
        previousPage
    };
    
}