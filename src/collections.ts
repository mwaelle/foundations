//fonction permettant de récupérer l'item de type T dont l'identifiant est passé en paramètre à partir d'un tableau d'objets de type T
export const findById = <T extends { id: number }>(items: Array<T>, id: number): T | undefined =>
    items.find((item) => item.id === id);

//fonction permettant de renvoyer un tableau de type T où l'item du même identifiant que l'objet replacement est remplacé par ce dernier
export const replaceById = <T extends { id: number }>(items: Array<T>, replacement: T): Array<T> => {
    return items.map((item) => {
        if (item.id === replacement.id) {
            return replacement; 
        }
        return item;
    });
};
