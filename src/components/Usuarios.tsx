import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../ api/reqREs"
import { ReqRespList, User } from '../interfaces/reqREs.interface';


export const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<User[]>([]);

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
            setUsuarios( resp.data.data );
            pageRef.current ++;
        } else {
            alert( 'Sin registros' );
        }
    }

    const renderItem = ( { id, first_name, last_name, email, avatar }: User ) => {
        return(
            <tr key={ id.toString() }>
                <th>
                    <img 
                        src={ avatar } 
                        alt={ first_name }
                        style= {{
                            width: 35,
                            borderRadius: 100
                        }}
                    />
                </th>
                <th>{ first_name } { last_name } </th>
                <th>{ email }</th>
            </tr>
        );
    };

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( renderItem )
                    }
                </tbody>
            </table>

            <button 
                className="btn btn-primary"
                onClick = { loadUsers }
            >
                Siguientes
            </button>
        </>
    )
}
