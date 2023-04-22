import {Container} from 'inversify';

import {DependencyType} from './DependencyType';
import {IStoreExampleOne, IStoreExampleTwo} from '../../store/interfaces';
import {createStoreExampleOneMock, createStoreExampleTwoMock} from '../../store/__dummy__';

export function createTestContainer(): Container {
    const inversifyContainer = new Container({defaultScope: 'Singleton'});

    inversifyContainer
        .bind<IStoreExampleOne>(DependencyType.StoreExampleOne)
        .toConstantValue(createStoreExampleOneMock());

    inversifyContainer
        .bind<IStoreExampleTwo>(DependencyType.StoreExampleTwo)
        .toConstantValue(createStoreExampleTwoMock());

    return inversifyContainer;
}
