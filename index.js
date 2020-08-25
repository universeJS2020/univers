let page = [];

function univers(options) {
    
    //DOM creation
    function createElem() {
        page[page.length] = document.createElement(options.ElementType);

        if(options.Class)
            page[page.length-1].setAttribute(`class`, `${options.Class}`);
        if(options.Id)
            page[page.length-1].setAttribute(`id`, `${options.Id}`);
        if(options.Name)
            page[page.length-1].setAttribute(`name`, `${options.Name}`);
        if(options.Type)
            page[page.length-1].setAttribute(`type`, `${options.Type}`);
        if(options.Href)
            page[page.length-1].setAttribute(`href`, `${options.Href}`);
        if(options.Source)
            page[page.length-1].setAttribute(`src`, `${options.Source}`);
        if(options.Placeholder)
            page[page.length-1].setAttribute(`placeholder`, `${options.Placeholder}`);

        if(options.Text) {
            const text = document.createTextNode(`${options.Text}`);
            page[page.length-1].appendChild(text);
        } else {
            const text = document.createTextNode(``);
            page[page.length-1].appendChild(text);
        }

        if(options.PositionBody)
            document.body.appendChild(page[page.length-1]);
        else
            document.querySelector(`.${options.Position}`).appendChild(page[page.length-1]);
    }

    //Add the same class/id/name for every element in the DOM
    function theSame() {
        if(options.TheSame === `class`)
            page.forEach( element => {
                element.classList.add(`${options.CommonClass}`)
            })
        
        if(options.TheSame === `id`)
        page.forEach( element => {
            lement.classList.add(`${options.CommonId}`)
        })
        
        if(options.TheSame === `name`)
        page.forEach( element => {
            element.classList.add(`${options.CommonName}`)
        })
    }

    //Show password
    function showPassword(){
        const btn = document.querySelector(`.${ButtonClass}`);

        const inputList = options.InputList.split(" ");

        let show = false;

        btn.addEventListener('click', () => {
            inputList.forEach((input, type) => {
                if(show === false) {
                    input.type = 'text';
                } else {
                    input.type = 'password';
                }
            });
        });
    }
    
    //Multiple DOM Creation
    function createElements() {
        let elements = [];
        let haveText = [];

        //Create elements
        const elem = options.ElementType.split(" ");
        elem.forEach( type => {
            page[page.length] = document.createElement(`${type}`);
            elements[elements.length] = page[page.length-1];
        })

        //Attributes
            if(options.ClassAddSelect) {
                const ClassAddSelect = options.ClassAddSelect.split(" ");
                for(let i=0;i<elements.length;i++) {
                    if(ClassAddSelect[i] !== 'skip')
                        elements[i].classList.add(`${ClassAddSelect[i]}`);
                }
            }
            if(options.IdAddSelect) {
                const IdAddSelect = options.IdAddSelect.split(" ");
                for(let i=0;i<elements.length;i++) {
                    if(IdAddSelect[i] !== 'skip')
                        elements[i].setAttribute(`id`, `${IdAddSelect[i]}`);
                }
            }
            if(options.NameAddSelect) {
                const NameAddSelect = options.NameAddSelect.split(" ");
                for(let i=0;i<elements.length;i+=2) {
                    elements[i].setAttribute(`name`, `${NameAddSelect[i+1]}`);
                }
            } // href, source, type, placeholder

        //Set common attributes
        if(options.CommonClass || options.CommonId || options.CommonName) {
            elements.forEach( el => {
                if(options.CommonClass)
                    el.classList.add(`${options.CommonClass}`);
                if(options.CommonId)
                    el.classList.add(`${options.CommonId}`);
                if(options.CommonName)
                    el.classList.add(`${options.CommonName}`);
            });
        }
        //Custom text
        if(options.CustomText){
            const CustomText = options.CustomText.split(" ");

            for(let i=0;i<elements.length;i++) {
                if(CustomText[i] === 'skip') {
                    const text = document.createTextNode(` `);
                    elements[i].appendChild(text);
                } else {
                    const text = document.createTextNode(`${CustomText[i]}`);
                    elements[i].appendChild(text);
                }
            }

        } else {
            //Set common text
            const text = document.createTextNode(`${options.CommonText}`)
            elements.forEach( el => {
                el.appendChild(text);
            });
        }

        //LastPosition
        if(options.LastPositions) {
            document.querySelector(`.${options.LastLocation}`).appendChild(elements[0]);
            for(let i=1;i<elements.length;i++) {
                const LastLocation = elements[i-1].getAttribute(`class`);
                document.querySelector(`.${LastLocation}`).appendChild(elements[i]);
            }
        } else 
            //SamePosition
            if(options.SamePosition)
                elements.forEach( el => {
                    document.querySelector(`.${options.LastLocation}`).appendChild(el);
                });
            //CustomPosition
            else {
                const Positions = options.CustomPosition.split(" ");
                for(let i=0;i<elements.length;i++) {
                    document.querySelector(`.${Positions[i]}`).appendChild(elements[i]);
                }
            }
    }

    if(options.CreateElement)
        createElem();

    if(options.CreateElements)
        createElements();

    if(options.Same)
        theSame();

    if(options.ShowPassword)
        showPassword();
}

module.exports.univers = univers;

/*
univers({
    
*/

/*
    CreateElement: bool,
    CreateElements: bool,
    SamePosition: bool,
    LastPosition: bool,
    Same: bool,
    ShowPassword: bool,
    PositionBody: bool,
    ElementType: string,
    Class: string,
    Id: string,
    Name: string,
    Type: string,
    Href: string,
    Source: string,
    Placeholder: string,
    Text: string,
    CustomText: string,
    CommonText: string,
    CommonClass: string,
    CommonId: string,
    CommonName: string,
    ButtonClass: string,
    InputList: string,
    LastLocation: string,
    CustomPosition: string,
    ClassAddSelect: string,
    IdAddSelect: string,
    NameAddSelect: string,
*/