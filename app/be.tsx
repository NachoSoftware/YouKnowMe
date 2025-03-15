export const requestUsers = () => {};

export const addNewUser = () => {};

interface CreateLinkGroupProps {
    name: string;
    links: Array<string>;
}

enum UserValidationStatus {
    Unkown = 0,
    Validating = 1,
    Valid = 2
}

const Example_Link_Group = {
    12345: UserValidationStatus.Valid,
    11111: UserValidationStatus.Valid,
    98765: UserValidationStatus.Valid,

}

export const createLinkGroup = ({ name, links }: CreateLinkGroupProps) => {
    
}

interface GetLinkGroupProps {
    name: string;
}

export const getLinkGroup = ({ name }: GetLinkGroupProps) => {
    return Example_Link_Group;
}

interface ValidateUserProps {
    id: string;
}

export const validateUser = ({ id }: ValidateUserProps) => {
    return UserValidationStatus.Valid;
};

export const getLink = (n: number) => `LINK_${n}`;