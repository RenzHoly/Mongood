import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { FilterQuery } from 'mongodb'
import { isEqual } from 'lodash'

import { MongoData } from '@/types'

export default createSlice({
  name: 'operations',
  initialState: {
    filter: {},
    refreshInterval: 1000,
    isOpen: false,
    hidden: true,
  } as {
    filter: FilterQuery<unknown>
    refreshInterval: number
    isOpen: boolean
    hidden: boolean
    invokedOperation?: { [key: string]: MongoData }
  },
  reducers: {
    setFilter: (state, { payload }: PayloadAction<FilterQuery<unknown>>) =>
      isEqual(payload, state.filter)
        ? state
        : {
            ...state,
            filter: payload,
          },
    setRefreshInterval: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      refreshInterval: payload,
    }),
    setIsOpen: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      isOpen: payload,
    }),
    setHidden: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      hidden: payload,
    }),
    setInvokedOperation: (
      state,
      { payload }: PayloadAction<{ [key: string]: MongoData }>,
    ) => ({
      ...state,
      invokedOperation: payload,
    }),
  },
})