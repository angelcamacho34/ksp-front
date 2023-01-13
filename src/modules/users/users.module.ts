import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersFacade } from 'src/modules/users/facades/users.facade';
import { UsersRepository } from './repository/users.repository';
import { UsersEffects } from './store/users.effects';

import * as fromReducer from './store/users.reducer';


@NgModule({
    imports: [
        StoreModule.forFeature(fromReducer.featureKey, fromReducer.reducer),
        EffectsModule.forFeature([UsersEffects]),
    ],
    providers: [
        UsersRepository,
        UsersFacade
    ],
})
export class CoreUsersModule { }
