
export const TiposBasicos = () => {

    const nombre: string  = 'José Alfonso';
    const edad: number = 35;
    const estaActivo: boolean = true;
    const poderes: Array<string> = [ 'Velocidad', 'Volar', 'Respirar en agua'];

    return (
        <>
            <h3>Tipos básicos.</h3>
            { nombre }, { edad }, { estaActivo ? 'Sí' : 'No' }
            <br />
            { poderes.join( ', ' ) }
        </>
    )
}
