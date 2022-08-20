import * as React from 'react';
import { onClickUrl } from '../../utils/routing';


type Props = {
    name: string;
    imageUrl: string;
    description: string;
    route: string;
}

export const ProjectContainer: React.FC<Props> = props => {
    const { name, imageUrl, description, route } = props;

    return (
        <div onClick={onClickUrl(route)}>
            <img src={imageUrl}></img>
            <div>
                {name}
            </div>
            <div>
                {description}
            </div>
        </div>
    );
}