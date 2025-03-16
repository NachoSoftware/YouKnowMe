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

interface GetUserProps {
    id: string;
}

const Example_User = {
    id: 12345,
    status: UserValidationStatus.Valid,
}

export const getUser = ({ id }: GetUserProps) => {
    return Example_User;
};

export const getInviteUserLink = () => `LINK`;

const userInput = () => '123';

const newConductor_flow = () => {
    const name = userInput(); 
    const n = userInput();
    const links = new Array<string>(n).map(() => getInviteUserLink());
    createLinkGroup({ name, links});
}

interface NewPlayer_flow {
    inviteLinkId: string;
}

const createPlayer = (username: string, inviteLinkId: string) => {
    return getUser({ id: username});
}



const newPlayer_flow = ({ inviteLinkId }: NewPlayer_flow) => {
    // on load
    const username = userInput();
    
    const player = createPlayer(username, inviteLinkId):

    switch(player.status){
        case UserValidationStatus.Validating:
            return "Waiting for other "
        case UserValidationStatus.Valid:
            return "You have joined the group!";
    }
};