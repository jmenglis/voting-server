import {List, Map} from 'immutable'
import {expect} from 'chai'

import {setEntries} from '../src/core'

describe('application logic', () => {

  desribe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state     = Map(),
            entries   = List.of('Trainspotting', '28 Days Later'),
            nextState = setEntries(state, entries)
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }))
    })

  })

})
