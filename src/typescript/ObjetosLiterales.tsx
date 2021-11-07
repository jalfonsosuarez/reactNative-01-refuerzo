

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
};

interface Direccion {
    pais: string;
    casaNo: number;
}

export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'José Alfonso',
        edad: 56,
        direccion: {
            pais: 'España',
            casaNo: 4
        }
    }

    return (
        <div>
            <h3>Objetos literales</h3>
            <code>
                <pre>
                    { JSON.stringify( persona, null, 2 ) }
                </pre>
            </code>
        </div>
    )
}
