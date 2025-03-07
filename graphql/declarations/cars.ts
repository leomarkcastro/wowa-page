import { graphql } from '../generated';

export const Car_List = graphql(`
  query Car_List($input: Api_car_listInput!) {
    api_car_list(input: $input) {
      data {
        id
        lotId
        vin
        year
        make
        model
        transmission
        engineSize
        engineNumber
        bodyStyle
        mileage
        mileageType
        isClearTitle
        isNumbersMatching
        isRestored
        isInDamageOrAccident
        exteriorColor
        factoryName
        tires
        wheels
        exteriorFlags
        exteriorDetailNote
        interiorColor
        interiorSurfaceMaterial
        interiorCondition
        mechanicalSuspensionNote
        frameNote
        featuresAndOptionsNote
        notablePoints
        reservePrice
        additionalNote
        overallNote
        customerNet
        commissionRate
        entryFee
        entryFeeStatus
        entryFeePaymentMethod
        entryFeeCollectedById
        entryFeeCollectedBy {
          id
          email
          prefix
          name
          middleName
          lastName
          suffix
          displayName
          role
          actorType
          mobileNumber
          faxNumber
          homeNumber
          secondaryEmail
          addressLine1
          addressLine2
          city
          state
          postalCode
          company
          companyContact
          isActive
          lastLogin
          createdAt
          updatedAt
        }
        entryFeePaidAt
        marketValueHigh
        marketValueLow
        isSellWithoutReserve
        photoIds
        marketingPhotosIds
        isConfirmedSeller
        contactConsignor {
          id
          email
          prefix
          name
          middleName
          lastName
          suffix
          displayName
          role
          actorType
          mobileNumber
          faxNumber
          homeNumber
          secondaryEmail
          addressLine1
          addressLine2
          city
          state
          postalCode
          company
          companyContact
          isActive
          lastLogin
          createdAt
          updatedAt
        }
        contactConsignorId
        contactSpecialist
        contactApprovedBy {
          id
          email
          prefix
          name
          middleName
          lastName
          suffix
          displayName
          role
          actorType
          mobileNumber
          faxNumber
          homeNumber
          secondaryEmail
          addressLine1
          addressLine2
          city
          state
          postalCode
          company
          companyContact
          isActive
          lastLogin
          createdAt
          updatedAt
        }
        contactApprovedById
        auctionId
        createdAt
        isTitleReceived
        isPaymentProcessed
        isVehicleCollected
        isTransportationDelivered
        comments
        status
        auction {
          id
          auctionID
          name
          addressLine1
          addressLine2
          city
          state
          zip
          country
          summary
          body
          tags
          eventDateStart
          eventDateEnd
          photoIds
          createdAt
          photos {
            id
            assignedTo
            name
            url
            mime
            size
            metadata
            createdAt
            path
            category
            note
          }
          deletedAt
        }
        photos {
          id
          assignedTo
          name
          url
          mime
          size
          metadata
          createdAt
          path
          category
          note
        }
        marketingPhotos {
          id
          assignedTo
          name
          url
          mime
          size
          metadata
          createdAt
          path
          category
          note
        }
        deletedAt
        updateID
      }
      page {
        total
        range {
          from
          to
        }
        page
        pageSize
      }
    }
  }
`);

export const Car_Aggregate = graphql(`
  query Car_Aggregate($input: Api_car_aggregateInput!) {
    api_car_aggregate(input: $input) {
      breakdown {
        countBy
        count
      }
    }
  }
`);

export const Car_GroupBy = graphql(`
  query Car_GroupBy($input: Api_car_groupByInput!) {
    api_car_groupBy(input: $input) {
      breakdown {
        uniqueIdentifier
        counts {
          countBy
          count
        }
      }
    }
  }
`);

export const Car_Get = graphql(`
  query Car_Get($input: Api_car_getInput!) {
    api_car_get(input: $input) {
      data {
        id
        lotId
        vin
        year
        make
        model
        transmission
        engineSize
        engineNumber
        bodyStyle
        mileage
        mileageType
        isClearTitle
        isNumbersMatching
        isRestored
        isInDamageOrAccident
        exteriorColor
        factoryName
        tires
        wheels
        exteriorFlags
        exteriorDetailNote
        interiorColor
        interiorSurfaceMaterial
        interiorCondition
        mechanicalSuspensionNote
        frameNote
        featuresAndOptionsNote
        notablePoints
        reservePrice
        additionalNote
        overallNote
        customerNet
        commissionRate
        entryFee
        entryFeeStatus
        entryFeePaymentMethod
        entryFeeCollectedById
        entryFeeCollectedBy {
          id
          email
          prefix
          name
          middleName
          lastName
          suffix
          displayName
          role
          actorType
          mobileNumber
          faxNumber
          homeNumber
          secondaryEmail
          addressLine1
          addressLine2
          city
          state
          postalCode
          company
          companyContact
          isActive
          lastLogin
          createdAt
          updatedAt
        }
        entryFeePaidAt
        marketValueHigh
        marketValueLow
        isSellWithoutReserve
        photoIds
        marketingPhotosIds
        isConfirmedSeller
        contactConsignor {
          id
          email
          prefix
          name
          middleName
          lastName
          suffix
          displayName
          role
          actorType
          mobileNumber
          faxNumber
          homeNumber
          secondaryEmail
          addressLine1
          addressLine2
          city
          state
          postalCode
          company
          companyContact
          isActive
          lastLogin
          createdAt
          updatedAt
        }
        contactConsignorId
        contactSpecialist
        contactApprovedBy {
          id
          email
          prefix
          name
          middleName
          lastName
          suffix
          displayName
          role
          actorType
          mobileNumber
          faxNumber
          homeNumber
          secondaryEmail
          addressLine1
          addressLine2
          city
          state
          postalCode
          company
          companyContact
          isActive
          lastLogin
          createdAt
          updatedAt
        }
        contactApprovedById
        auctionId
        createdAt
        isTitleReceived
        isPaymentProcessed
        isVehicleCollected
        isTransportationDelivered
        comments
        status
        auction {
          id
          auctionID
          name
          addressLine1
          addressLine2
          city
          state
          zip
          country
          summary
          body
          tags
          eventDateStart
          eventDateEnd
          photoIds
          createdAt
          photos {
            id
            assignedTo
            name
            url
            mime
            size
            metadata
            createdAt
            path
            category
            note
          }
          deletedAt
        }
        photos {
          id
          assignedTo
          name
          url
          mime
          size
          metadata
          createdAt
          path
          category
          note
        }
        marketingPhotos {
          id
          assignedTo
          name
          url
          mime
          size
          metadata
          createdAt
          path
          category
          note
        }
        deletedAt
        updateID
      }
    }
  }
`);

export const Car_Create = graphql(`
  mutation Car_Create($input: Api_car_createInput!) {
    api_car_create(input: $input) {
      count
      ids
    }
  }
`);

export const Car_Update = graphql(`
  mutation Car_Update($input: Api_car_updateInput!) {
    api_car_update(input: $input) {
      count
      ids
    }
  }
`);

export const Car_Delete = graphql(`
  mutation Car_Delete($input: Api_car_deleteInput!) {
    api_car_delete(input: $input) {
      count
      ids
    }
  }
`);
