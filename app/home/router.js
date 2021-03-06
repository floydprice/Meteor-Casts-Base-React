import React from 'react'
import {mount} from 'react-mounter'
import Home from './components/Home'
import MainLayout from '../layout/components/MainLayout'

FlowRouter.route("/", {
  name: "home",
  action() {
    mount(MainLayout, {content: <Home />})
  }
})

