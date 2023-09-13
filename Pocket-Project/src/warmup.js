const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    let p = document.createElement('p')
    p.innerText = string
    if(htmlElement.children){
        htmlElement.innerText = ""
    }
    htmlElement.append(p)
};

htmlGenerator('Party Time.', partyHeader);
htmlGenerator("I Love Vanilla Dom", partyHeader)