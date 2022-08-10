import React from 'react'
import "./Acc.css"
const Acceuil = () => {
  return (
    <div>
<div class="bravo_topbar">
            <div class="container">

                <div class="content">
                    <div class="topbar-left">

                        <div class="socials">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-google-plus"></i></a>
                        </div>
                        <span class="line">

                        </span>
                        <a href="mailto:contact@kawacom.agency">contact@kawacom.agency</a>


                    </div>
                    <div class="topbar-right">
                        <ul class="topbar-items">
                            <li class="login-item">
                                <a href="#login" data-toggle="modal" data-target="#login" class="login">Login</a>
                            </li>
                            <li class="signup-item">
                                <a href="#register" data-toggle="modal" data-target="#register" class="signup">Sign
                                    Up</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="bravo_header">
            <div class="container">
                <div class="content">
                    <div class="header-left">
                        <a href="https://dev.iledere-apps.com" class="bravo-logo">
                            <img src="https://dev.iledere-apps.com/uploads/demo/general/logoreapp.jpg" alt="Ré Apps"></img>
                        </a>
                        <div class="bravo-menu">
                            <ul class="main-menu menu-generated">
                                <li class=" depth-0"><a target="" href="/page/explorer-ile">Explorer ile</a></li>
                                <li class=" depth-0"><a target="" href="#">Hébergements <i
                                            class="caret fa fa-angle-down"></i></a>
                                    <ul class="children-menu menu-dropdown">
                                        <li class=" depth-1"><a target="" href="/hotel">Hotels</a></li>
                                        <li class=" depth-1"><a target="" href="/space">Maisons d'hôtes</a></li>
                                    </ul>
                                </li>
                                <li class=" depth-0"><a target="" href="#">Sorties <i
                                            class="caret fa fa-angle-down"></i></a>
                                    <ul class="children-menu menu-dropdown">
                                        <li class=" depth-1"><a target="" href="/event">Liste des Evenements</a></li>
                                        <li class=" depth-1"><a target="" href="/tour">Randonnées</a></li>
                                        <li class=" depth-1"><a target="" href="/car">Location Voirtue</a></li>
                                    </ul>
                                </li>
                                <li class=" depth-0"><a target="" href="#">Communes <i
                                            class="caret fa fa-angle-down"></i></a>
                                    <ul class="children-menu menu-dropdown">
                                        <li class=" depth-1"><a target="" href="/location/la-flotte">La flotte</a></li>
                                        <li class=" depth-1"><a target="" href="/location/rivedoux-plage">RIVEDOUX
                                                PLAGE</a></li>
                                        <li class=" depth-1"><a target="" href="/location/saint-martin-de-re">SAINT
                                                MARTIN DE RÉ</a></li>
                                        <li class=" depth-1"><a target="" href="/location/le-bois-plage-en-re">LE BOIS
                                                PLAGE EN RÉ</a></li>
                                        <li class=" depth-1"><a target="" href="/location/la-couarde-sur-mer">LA COUARDE
                                                SUR MER</a></li>
                                    </ul>
                                </li>
                                <li class=" depth-0"><a target="" href="/page/become-a-vendor">Rejoignez-nous</a></li>
                                <li class=" depth-0"><a target="" href="/establishment">Recherche</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="header-right">
                        <button class="bravo-more-menu">
                            <i class="fa fa-bars"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div class="bravo-menu-mobile" style="display:none;">
                <div class="user-profile">
                    <div class="b-close"><i class="icofont-scroll-left"></i></div>
                    <div class="avatar"></div>
                    <ul>
                        <li>
                            <a href="#login" data-toggle="modal" data-target="#login" class="login">Login</a>
                        </li>
                        <li>
                            <a href="#register" data-toggle="modal" data-target="#register" class="signup">Sign Up</a>
                        </li>
                    </ul>
                    <ul class="multi-lang">
                    </ul>
                    <ul class="multi-lang">
                    </ul>
                </div>
                <div class="g-menu">
                    <ul class="main-menu menu-generated">
                        <li class=" depth-0"><a target="" href="/page/explorer-ile">Explorer ile</a></li>
                        <li class=" depth-0"><a target="" href="#">Hébergements <i
                                    class="caret fa fa-angle-down"></i></a>
                            <ul class="children-menu menu-dropdown">
                                <li class=" depth-1"><a target="" href="/hotel">Hotels</a></li>
                                <li class=" depth-1"><a target="" href="/space">Maisons d'hôtes</a></li>
                            </ul>
                        </li>
                        <li class=" depth-0"><a target="" href="#">Sorties <i class="caret fa fa-angle-down"></i></a>
                            <ul class="children-menu menu-dropdown">
                                <li class=" depth-1"><a target="" href="/event">Liste des Evenements</a></li>
                                <li class=" depth-1"><a target="" href="/tour">Randonnées</a></li>
                                <li class=" depth-1"><a target="" href="/car">Location Voirtue</a></li>
                            </ul>
                        </li>
                        <li class=" depth-0"><a target="" href="#">Communes <i class="caret fa fa-angle-down"></i></a>
                            <ul class="children-menu menu-dropdown">
                                <li class=" depth-1"><a target="" href="/location/la-flotte">La flotte</a></li>
                                <li class=" depth-1"><a target="" href="/location/rivedoux-plage">RIVEDOUX PLAGE</a>
                                </li>
                                <li class=" depth-1"><a target="" href="/location/saint-martin-de-re">SAINT MARTIN DE
                                        RÉ</a></li>
                                <li class=" depth-1"><a target="" href="/location/le-bois-plage-en-re">LE BOIS PLAGE EN
                                        RÉ</a></li>
                                <li class=" depth-1"><a target="" href="/location/la-couarde-sur-mer">LA COUARDE SUR
                                        MER</a></li>
                            </ul>
                        </li>
                        <li class=" depth-0"><a target="" href="/page/become-a-vendor">Rejoignez-nous</a></li>
                        <li class=" depth-0"><a target="" href="/establishment">Recherche</a></li>
                    </ul>
                </div>
            </div> */}
        </div>

        </div>
    
  )
}

export default Acceuil