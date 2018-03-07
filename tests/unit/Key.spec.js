import { shallow } from '@vue/test-utils'
import Key from '@/components/Key'

describe('Key.vue', () => {
  let wrapper
  const code = '35'
  const value = '#'
  const event = 'keypress'
  beforeEach(() => {
    wrapper = shallow(Key, { propsData: { code, value, event } })
  })
  it('renders props.code correctly when passed', () => {
    const codeEl = wrapper.find('.key__code')
    expect(wrapper.contains(codeEl))
    expect(codeEl.text()).toMatch(code)
  })
  it('renders props.value correctly when passed', () => {
    const valueEl = wrapper.find('.key__value')
    expect(wrapper.contains(valueEl))
    expect(valueEl.text()).toMatch(value)
  })
  it('renders props.event correctly when passed', () => {
    const eventEl = wrapper.find('.key__event')
    expect(wrapper.contains(eventEl))
    expect(eventEl.text()).toMatch(event)
  })
})
