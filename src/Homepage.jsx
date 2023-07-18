import React from 'react';
import "./homepage.css"

export default function Homepage(){

    return(
        <>
        <div className='homepage'>
            <div className="titolo">Classifica parziale</div>
        </div>
        
        <div className="container-righe">
        <div className="riga">
            <div className="foto" id='riky'></div><div className="nome">1. Riky Real</div>
        </div>
        <div className="riga">
            <div className="foto" id='anza'></div><div className="nome">2. The Anza</div>
        </div>
        <div className="riga">
            <div className="foto" id='faso'></div><div className="nome">3. Faso</div>
        </div>
        <div className="riga">
            <div className="foto" id='garna'></div><div className="nome">4. Garna the Gabri</div>
        </div>
        <div className="riga">
            <div className="foto" id='trenta'></div><div className="nome">5. Trenta i</div>
        </div>
        <div className="riga">
            <div className="foto" id='broggi'></div><div className="nome">6. 8roggi</div>
        </div>
        <div className="riga">
            <div className="foto" id='onorevole'></div><div className="nome">7. Onorevole</div>
        </div>
        <div className="riga">
            <div className="foto" id='pit'></div><div className="nome">8. Pit</div>
        </div>
        </div>

        <div className="logo"></div>
        <div className="sponsored-by">Sponsored By</div>
        <div className="sfondo-logo"></div>
        </>
    );

}