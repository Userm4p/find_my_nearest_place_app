# Find my nearest place app

tests coverage: 100%

### Description

This is a simple app that allows users to find the nearest place of a search by city. The app uses a json file with a list of places and their coordinates to calculate the distance between the user's location and the places in the list. The app uses the haversine formula to calculate the distance between two points on the earth's surface.

### Technologies

- React
- Styled-components
- Typescript
- Scss
- Jest
- React Testing Library
- React Router

### How to run the app

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the app in development mode
4. Run `npm test:watch` to run the tests in watch mode
5. Run `npm test:coverage` to run the tests and generate a coverage report
6. Run `npm run fmt` to format the code
7. Run `npm run fmt` to format the code
8. Run `npm run build` to build the app
9. Run `npm run start` to start the app in production mode

### Project structure

```
  |- public
  |- src
    |- components
      |- GenericComponent
        |- styled.ts
    |- hooks
      |- useGenericHook.tsx
    |- pages
      |- GenericPage
        |- components
          |- styled.ts
          |- SpecificComponent.tsx
        |- hooks
          |- useSpecificHook.tsx
        |-context
          |- SpecificContext.tsx
        |-utils
          |- specificFunction.ts
          |- specificEnum.ts
        |- types
          |- specificType.ts
        |- GenericPage.tsx
        |- _GenericPage.scss
    |- db
        |- cities.json
    |- routes
      |- AppRouter.ts
    |- App.tsx
    |- main.tsx
    |- react-app-env.d.ts
    |- setupTests.ts
```

### About distance calculation

The app uses the haversine formula to calculate the distance between two points on the earth's surface. The haversine formula calculates the distance between two points on the earth's surface given their longitudes and latitudes. The formula is given by:

```

  a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
  c = 2 ⋅ atan2( √a, √(1−a) )
  d = R ⋅ c

```

where φ is latitude, λ is longitude, R is earth’s radius (mean radius = 6,371km) and Δ is the difference between two points.

