import Story from "./Story";
export default function Stories() {
    const objetosStorie = [
        {
          enredeco: "assets/img/9gag.svg",
          pagina: "9gag",
        },
        {
          enredeco: "assets/img/meowed.svg",
          pagina: "meowed",
        },
        {
          enredeco: "assets/img/barked.svg",
          pagina: "barked"
        },
        {
          enredeco: "assets/img/nathanwpylestrangeplanet.svg",
          pagina: "nathanwpylestrangeplanet",
        },
        {
          enredeco: "assets/img/wawawicomics.svg",
          pagina: "wawawicomics",
        },
        {
          enredeco: "assets/img/respondeai.svg",
          pagina: "respondeai",
        },
        {
          enredeco: "assets/img/filomoderna.svg",
          pagina: "filomoderna",
        },
        {
          enredeco: "assets/img/memeriagourmet.svg",
          pagina: "memeriagourmet",
        }
      ];
    return (
        <div className="stories">
            {objetosStorie.map((objeto) => <Story key={Math.random().toString(36).substr(2, 9)} img={objeto.enredeco} usuario={objeto.pagina}/>)}

            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
}
