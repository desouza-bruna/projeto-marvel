'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">projeto-marvel documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2ae01a9b2c3f4655866124937342b3fab03cb5f565aeda11bd650ecc57a72e71401308c0deac8633cef604c35aa69d0c35d422bd9d60df5e474e06ab25426c9b"' : 'data-target="#xs-components-links-module-AppModule-2ae01a9b2c3f4655866124937342b3fab03cb5f565aeda11bd650ecc57a72e71401308c0deac8633cef604c35aa69d0c35d422bd9d60df5e474e06ab25426c9b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2ae01a9b2c3f4655866124937342b3fab03cb5f565aeda11bd650ecc57a72e71401308c0deac8633cef604c35aa69d0c35d422bd9d60df5e474e06ab25426c9b"' :
                                            'id="xs-components-links-module-AppModule-2ae01a9b2c3f4655866124937342b3fab03cb5f565aeda11bd650ecc57a72e71401308c0deac8633cef604c35aa69d0c35d422bd9d60df5e474e06ab25426c9b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CharactersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CharactersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComicsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComicsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SeriesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeriesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-75a1cfee5672890290ac410166653ea1382ee279e84c34913ba90a8c6c98d13983be68f0a49ff1c9daad9b53022614d5a266731ff087d45d971a65526bff46be"' : 'data-target="#xs-components-links-module-CoreModule-75a1cfee5672890290ac410166653ea1382ee279e84c34913ba90a8c6c98d13983be68f0a49ff1c9daad9b53022614d5a266731ff087d45d971a65526bff46be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-75a1cfee5672890290ac410166653ea1382ee279e84c34913ba90a8c6c98d13983be68f0a49ff1c9daad9b53022614d5a266731ff087d45d971a65526bff46be"' :
                                            'id="xs-components-links-module-CoreModule-75a1cfee5672890290ac410166653ea1382ee279e84c34913ba90a8c6c98d13983be68f0a49ff1c9daad9b53022614d5a266731ff087d45d971a65526bff46be"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-0a8f16bfa34a73d6839528601a983f410a4eaeb0b79317d28c84ac15b5f870f49c30946ae59481d80b6f0abb4279852103ae120961fd5c1093035ee14fc0bc4f"' : 'data-target="#xs-components-links-module-SharedModule-0a8f16bfa34a73d6839528601a983f410a4eaeb0b79317d28c84ac15b5f870f49c30946ae59481d80b6f0abb4279852103ae120961fd5c1093035ee14fc0bc4f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-0a8f16bfa34a73d6839528601a983f410a4eaeb0b79317d28c84ac15b5f870f49c30946ae59481d80b6f0abb4279852103ae120961fd5c1093035ee14fc0bc4f"' :
                                            'id="xs-components-links-module-SharedModule-0a8f16bfa34a73d6839528601a983f410a4eaeb0b79317d28c84ac15b5f870f49c30946ae59481d80b6f0abb4279852103ae120961fd5c1093035ee14fc0bc4f"' }>
                                            <li class="link">
                                                <a href="components/CharacterCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CharacterCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ComicCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComicCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProgressBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProgressBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SerieCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SerieCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CharactersService.html" data-type="entity-link" >CharactersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ComicService.html" data-type="entity-link" >ComicService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchService.html" data-type="entity-link" >SearchService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SerieService.html" data-type="entity-link" >SerieService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpErrorInterceptor.html" data-type="entity-link" >HttpErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Character.html" data-type="entity-link" >Character</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comic.html" data-type="entity-link" >Comic</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/General.html" data-type="entity-link" >General</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link" >Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Serie.html" data-type="entity-link" >Serie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Thumbnail.html" data-type="entity-link" >Thumbnail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Url.html" data-type="entity-link" >Url</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});