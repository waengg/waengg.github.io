import * as React from 'react';
import { ProjectContainer } from '../../components/common/projectContainer';
import { projects } from './projectsList';

type ProjectsProps = {

}

export const Projects: React.FC<ProjectsProps> = props => {
    return (
        <div>
            {projects.map(project => {

                return <ProjectContainer
                    name={project.name}
                    imageUrl={project.imageUrl}
                    description={project.description}
                    route={project.projectRoute}/>
            })}
        </div>
    )
}