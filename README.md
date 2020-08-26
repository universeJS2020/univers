# Installation

`npm install --save univers`

# Description

*Hi there! Have you ever asked yourself how would be if with 7 lines of code you could write an entire section of a webpage?*
*Yes or no? I think you haven't!*
*With UNIVERS this is reality! Download UNIVERSE and make your work easier!*

*Please tell UNIVERSE team what would you like too see in the next updates!*
*Thank you for your time!*

# Help & examples

**Import**
```javascript
import { univers } from 'univers';
```

**Create an element**
```javascript
univers({
    CreateElements: true,
    ElementType: 'h1',
    CustomText: 'Welcome!',
    ClassAddSelect: 'someText',
    CustomPosition: 'div1',
});
```
![alt text](https://github.com/universeJS2020/universe/blob/master/img/Photo1.png)

**Create more elements**
```javascript
univers({
    CreateElements: true,
    ElementType: 'div div h2 ul li a li a li a',
    CustomText: 'skip skip BrandName skip skip Home skip Contact skip Help',
    ClassAddSelect: 'navBar Name skip MenuLinks link1 skip link2 skip link3 skip',
    CustomPosition: 'body navBar Name navBar MenuLinks link1 MenuLinks link2 MenuLinks link3',
});
```
![alt text](https://github.com/universeJS2020/universe/blob/master/img/Photo2.png)
# Commands

**Functions**
* CreateElements: bool
* ShowPassword: bool
* MoreClasses: string

**Element/Elements**
* ElementType: string

**Text**
* CustomText: string
* CommonText: string

**Classes**
* ClassAddSelect: string
* CommonClass: string

**IDs**
* IdAddSelect: string
* CommonId: string

**Names**
* NameAddSelect: string
* CommonName: string

**Comands for ShowPassword function**
* ButtonClass: string
* InputList: string

**Positions**
* SamePosition: bool
* LastPosition: bool
* LastLocation: string
* CustomPosition: string

**Keywords**
* skip (to be used if you want to let an element without an attribute)