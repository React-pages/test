import './App.css';
import {  Card, EinrideProvider, einrideTheme, Group, Link, Paragraph, Stack, useTheme, VerticalSpacing } from '@einride/ui';
import { useState } from 'react';
import { useMediaQuery } from '@einride/hooks';

const BookingStop = ({ order, stop })=> {
  const { locationOrAddress, requestedStartTime, requestedEndTime, stopType } = stop
  return (
    <Group justifyContent="space-between" alignItems="center" gap={0}>
      <Group gap="xs">
        <Paragraph>{order}</Paragraph>
        <Paragraph>
          {locationOrAddress.name}
        </Paragraph>
      </Group>
    </Group>
  )
}

const BookingStopContainer = ({ middleSteps })=> {
  const [showMiddleSteps, setShowMiddleSteps] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.mediaQueries.belowMd)
  return (
    <Stack
            onMouseOver={(e) => {
              if (!isMobile) {
                setShowMiddleSteps(true)
              }
            }}
            onMouseOut={() =>{
              if (!isMobile) {
              setShowMiddleSteps(false)
            }
            }}
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              // e.nativeEvent.stopPropagation()
              // e.nativeEvent.stopImmediatePropagation()
              // e.nativeEvent.preventDefault()
              if (isMobile) {
                setShowMiddleSteps(!showMiddleSteps)
              }
            }}
          >
            {!showMiddleSteps && (
              <Group gap="xs">
                <Paragraph color="secondary">|</Paragraph>
                <Paragraph color="secondary" style={{ textDecoration: "underline" }}>
                moreStops{ middleSteps.length }
                </Paragraph>
              </Group>
            )}
            {showMiddleSteps && (
              <Stack gap={0}>
                {middleSteps.map((stop, i) => (
                  <BookingStop
                    key={`${stop.locationOrAddress.name}-${stop.requestedStartTime}`}
                    order={i + 2}
                    stop={stop}
                  />
                ))}
              </Stack>
            )}
          </Stack>
  )
}

function App() {
  const [showMiddleSteps, setShowMiddleSteps] = useState(false)
  const [color, setColor] = useState('black')

  const stops = [
    {
      __typename: "Stop",
      type: "p",
      id: "pickup-location",
      state: "Awaiting",
      instructions: "pickup instructions",
      contactPerson: "contact person pickup",
      requestedEndTime: null,
      requestedStartTime: null,
      locationOrAddress: {
        //...mockLocation,
        name: "stop1",
      },
      actualEndTimeOrDate: null,
      actualStartTimeOrDate: null,
    },
    {
      __typename: "Stop",
      type: "p",
      id: "delivery-address",
      state: "Awaiting",
      instructions: "pickup instructions",
      contactPerson: "contact person delivery",
      requestedEndTime: null,
      requestedStartTime: null,
      locationOrAddress: {
        // ...mockLocation,
        name: "stop3",
      },
      actualEndTimeOrDate: null,
      actualStartTimeOrDate: null,
    },
    {
      __typename: "Stop",
      type: "p",
      id: "delivery-address",
      state: "Awaiting",
      instructions: "pickup instructions",
      contactPerson: "contact person delivery",
      requestedEndTime: null,
      requestedStartTime: null,
      locationOrAddress: {
        // ...mockLocation,
        name: "stop3",
      },
      actualEndTimeOrDate: null,
      actualStartTimeOrDate: null,
    },
    {
      __typename: "Stop",
      type: "p",
      id: "delivery-address",
      state: "Awaiting",
      instructions: "pickup instructions",
      contactPerson: "contact person delivery",
      requestedEndTime: null,
      requestedStartTime: null,
      locationOrAddress: {
        // ...mockLocation,
        name: "stop3",
      },
      actualEndTimeOrDate: null,
      actualStartTimeOrDate: null,
    },
  ]
  const middleSteps = stops.slice(1, -1)


  return (
    <div className="App">
      <EinrideProvider theme={einrideTheme}>
      <div style={{height: '30px', width: '30px', backgroundColor: color}}></div>
      {/* <Link to={"./"}> */}
      <Card background="secondary" onClick={() => setColor(color === 'black' ? 'blue' : 'black')}>
        <Group justifyContent="space-between" gap={0}>
          <Paragraph color="secondary">
           43
          </Paragraph>
        </Group>
        <VerticalSpacing size="sm" />
         <Stack gap={0}>
          <BookingStop order={1} stop={stops[0]} />
          <BookingStopContainer middleSteps={middleSteps} />
          {/* <Stack
            onMouseOver={(e) => {
              // e.nativeEvent.stopPropagation()
              // e.nativeEvent.stopImmediatePropagation()
              // e.nativeEvent.preventDefault()
              setShowMiddleSteps(true)
            }}
            onMouseOut={(e) =>{
              // e.nativeEvent.stopPropagation()
              // e.nativeEvent.stopImmediatePropagation()
              // e.nativeEvent.preventDefault()
              setShowMiddleSteps(false)
            }}
            // onTouchMove={(e) => {
            //   e.stopPropagation()
            //   e.nativeEvent.stopImmediatePropagation()
            //   e.preventDefault()
            // }}
            // onMouseDown={(e) => {
            //   e.stopPropagation()
            //   e.nativeEvent.stopImmediatePropagation()
            //   e.preventDefault()
            // }}
            // onMouseEnter={(e) => {
            //   e.stopPropagation()
            //   e.nativeEvent.stopImmediatePropagation()
            //   e.preventDefault()
            // }}
            // onMouseMove={(e) => {
            //   e.stopPropagation()
            //   e.nativeEvent.stopImmediatePropagation()
            //   e.preventDefault()
            // }}
            // onMouseUp={(e) => {
            //   e.stopPropagation()
            //   e.nativeEvent.stopImmediatePropagation()
            //   e.preventDefault()
            // }}
            // onTouchEnd={(e) => {
            //   e.stopPropagation()
            //   e.nativeEvent.stopImmediatePropagation()
            //   e.preventDefault()
            // }}
            // onTouchStart={(e) => {
            //   e.nativeEvent.stopPropagation()
            //   e.nativeEvent.stopImmediatePropagation()
            //   e.nativeEvent.preventDefault()
            //   setShowMiddleSteps(!showMiddleSteps)
            // }}
            onClick={(e) => {
              e.stopPropagation()
              e.preventDefault()
              e.nativeEvent.stopPropagation()
              e.nativeEvent.stopImmediatePropagation()
              e.nativeEvent.preventDefault()
              if (showMiddleSteps) {
                setShowMiddleSteps(false)
              }
            }}
          >
            {!showMiddleSteps && (
              <Group gap="xs">
                <Paragraph color="secondary">|</Paragraph>
                <Paragraph color="secondary" style={{ textDecoration: "underline" }}>
                moreStops{ middleSteps.length }
                </Paragraph>
              </Group>
            )}
            {showMiddleSteps && (
              <Stack gap={0}>
                {middleSteps.map((stop, i) => (
                  <BookingStop
                    key={`${stop.locationOrAddress.name}-${stop.requestedStartTime}`}
                    order={i + 2}
                    stop={stop}
                  />
                ))}
              </Stack>
            )}
          </Stack> */}
          </Stack>
          </Card>
          {/* </Link> */}
          </EinrideProvider>
    </div>
  );
}

export default App;
