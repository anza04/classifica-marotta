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
            <div className="foto" id='trenta'></div><div className="nome">1. Squenca</div>
        </div>
        <div className="riga">
            <div className="foto" id='riky'></div><div className="nome">2. Riky real</div>
        </div>
        <div className="riga">
            <div className="foto" id='broggi'></div><div className="nome">3. 8roggi</div>
        </div>
            <div className="riga">
            <div className="foto" id='onorevole'></div><div className="nome">4. Onorevole</div>
        </div>
        <div className="riga">
            <div className="foto" id='anza'></div><div className="nome">5. The anza</div>
        </div>
        <div className="riga">
            <div className="foto" id='pit'></div><div className="nome">6. Pit</div>
        </div>
        <div className="riga">
            <div className="foto" id='garna'></div><div className="nome">7. Garna the abri</div>
        </div>
        <div className="riga">
            <div className="foto" id='faso'></div><div className="nome">8. Faso</div>
        </div>
        
        </div>

        <div className="logo"></div>
        <div className="sponsored-by">Sponsored By</div>
        <div className="sfondo-logo"></div>
        </>
    );

}
