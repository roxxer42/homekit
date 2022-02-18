
import { createStore } from "vuex";
import axios from 'axios'

export const store = createStore({
    state: {
        rollers: [
            { id: 1, name: 'Kitchen', ip: '1.1.1.1', type: 'Roller'},
        ],
        rollerState: []
    },

    getters: {
        getAllRollers: state => {
            return state.rollers;
        },
        getRollerCount: state => {
            return state.rollers.length;
        },
        getIpForRoller: (state) => (id) => {
            return state.rollers.find(roller => roller.id === id).ip
        }
    },

    mutations: {
        SET_ROLLER_STATE(state, payload) {
            state.rollerState = {
                rollerId: payload.id,
                rollerState: payload.data
            }
        }
    },

    actions: {
        getState({commit, getters}, id ) {
            axios.get('http://'  + getters.getIpForRoller(id) + '/roller/0',
            { 
                headers: {} 
            })
            .then(response => {
                commit('SET_ROLLER_STATE', {
                    data: response.data, 
                    id: id
                })
            })
        }
    }
})