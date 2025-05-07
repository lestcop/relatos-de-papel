import '../styles/Libros.css'
import React from 'react';

export function Libros({datalibros}) {
    return(
        <main className='libros'>
            <ul>
                {datalibros.map((libro) => (
                    <li key={libro.id}>
                        <img src={libro.imagen} alt={libro.titulo} />
                        <div>
                            <strong>{libro.titulo}</strong>  
                        </div>
                        <div>
                            Autor: {libro.autor}
                        </div>
                        <div>
                            Categoría: {libro.categoria}
                        </div>
                        <div>
                            Formato: {libro.formato} 
                        </div>
                        <div>
                            ${libro.precio} 
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )

}