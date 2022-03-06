
import { createStore } from "vuex";
import axios from 'axios'

export const store = createStore({
    state: {
        rollers: [
            { id: 3, name: 'Work', ip: '192.168.178.41', type: 'Roller'},
            { id: 4, name: 'Balkon', ip: '192.168.178.40', type: 'Roller'}
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
        },
        getCurrentPosition: (state) => (id) => {
            return state.rollerState.find(roller => roller.id === id).data.current_pos;
        }
    },

    mutations: {
        SET_ROLLER_STATE(state, payload) {
            console.log("update")
            state.rollerState.push(payload)
        }
    },

    actions: {
        getState({commit, getters}, id ) {
            return axios.get('http://'  + getters.getIpForRoller(id) + '/roller/0')
            .then(response => {
                commit('SET_ROLLER_STATE', {
                    id: id,
                    data: response.data
                })
            })
        },
        stopRoller({getters}, id) {
            axios.get('http://' + getters.getIpForRoller(id) + '/roller/0?go=stop')
        },
        openRoller({getters}, id) {
            axios.get('http://' + getters.getIpForRoller(id) + '/roller/0?go=open')
        },
        closeRoller({getters}, id) {
            axios.get('http://' + getters.getIpForRoller(id) + '/roller/0?go=close')
        }
    }
})