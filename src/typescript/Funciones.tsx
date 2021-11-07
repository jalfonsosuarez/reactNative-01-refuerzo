

export const Funciones = () => {

    const sumar = ( a: number, b: number ): number => {
        return a + b;
    }

    return (
        <>
            <h3>Funciones en TS</h3>
            <span>
                Resultado: { sumar( 3, 3 ) }
            </span>
        </>
    )
}
