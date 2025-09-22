{
  "lmk-key": {
     "id": "LMK_KEY",
     "type": "varchar 64",
     "description": "Individual lodgement identifier. Guaranteed to be unique and can be used to identify a certificate in the downloads and the API."
  },
  "address-1": {
     "id": "ADDRESS1",
     "type": "varchar 84",
     "description": "First line of the address"
  },
  "address-2": {
     "id": "ADDRESS2",
     "type": "varchar 100",
     "description": "Second line of the address"
  },
  "address-3": {
     "id": "ADDRESS3",
     "type": "varchar 100",
     "description": "Third line of the address"
  },
  "postcode": {
     "id": "POSTCODE",
     "type": "varchar 8",
     "description": "The postcode of the property"
  },
  "building-reference-number": {
     "id": "BUILDING_REFERENCE_NUMBER",
     "type": "varchar 12",
     "description": "Unique identifier for the property."
  },
  "current-energy-rating": {
     "id": "CURRENT_ENERGY_RATING",
     "type": "varchar 8",
     "description": "Current energy rating converted into a linear 'A to G' rating (where A is the most energy efficient and G is the least energy efficient)"
  },
  "potential-energy-rating": {
     "id": "POTENTIAL_ENERGY_RATING",
     "type": "varchar 8",
     "description": "Estimated potential energy rating converted into a linear 'A to G' rating (where A is the most energy efficient and G is the least energy efficient)"
  },
  "current-energy-efficiency": {
     "id": "CURRENT_ENERGY_EFFICIENCY",
     "type": "int",
     "description": "Based on cost of energy, i.e. energy required for space heating, water heating and lighting [in kWh/year] multiplied by fuel costs. (£/m²/year where cost is derived from kWh)."
  },
  "potential-energy-efficiency": {
     "id": "POTENTIAL_ENERGY_EFFICIENCY",
     "type": "int",
     "description": "The potential energy efficiency rating of the property."
  },
  "property-type": {
     "id": "PROPERTY_TYPE",
     "type": "varchar 10",
     "description": "Describes the type of property such as House, Flat, Maisonette etc. This is the type differentiator for dwellings."
  },
  "built-form": {
     "id": "BUILT_FORM",
     "type": "varchar 20",
     "description": "The building type of the Property e.g. Detached, Semi-Detached, Terrace etc. Together with the Property Type, the Build Form produces a structured description of the property"
  },
  "inspection-date": {
     "id": "INSPECTION_DATE",
     "type": "date",
     "description": "The date that the inspection was actually carried out by the energy assessor"
  },
  "local-authority": {
     "id": "LOCAL_AUTHORITY",
     "type": "varchar 9",
     "description": "Office for National Statistics (ONS) code. Local authority area in which the building is located."
  },
  "constituency": {
     "id": "CONSTITUENCY",
     "type": "varchar 9",
     "description": "Office for National Statistics (ONS) code. Parliamentary constituency in which the building is located."
  },
  "county": {
     "id": "COUNTY",
     "type": "varchar 24",
     "description": "County in which the building is located (where applicable)"
  },
  "lodgement-date": {
     "id": "LODGEMENT_DATE",
     "type": "date",
     "description": "Date lodged on the Energy Performance of Buildings Register"
  },
  "transaction-type": {
     "id": "TRANSACTION_TYPE",
     "type": "varchar 82",
     "description": "Type of transaction that triggered EPC. For example, one of: marketed sale; non-marketed sale; new-dwelling; rental; not sale or rental; assessment for Green Deal; following Green Deal; FIT application; none of the above; RHI application; ECO assessment. Where the reason for the assessment is unknown by the energy assessor the transaction type will be recorded as 'none of the above'. Transaction types may be changed over time."
  },
  "environment-impact-current": {
     "id": "ENVIRONMENT_IMPACT_CURRENT",
     "type": "int",
     "description": "The Environmental Impact Rating. A measure of the property's current impact on the environment in terms of carbon dioxide (CO₂) emissions. The higher the rating the lower the CO₂ emissions. (CO₂ emissions in tonnes / year)"
  },
  "environment-impact-potential": {
     "id": "ENVIRONMENT_IMPACT_POTENTIAL",
     "type": "int",
     "description": "The potential Environmental Impact Rating. A measure of the property's potential impact on the environment in terms of carbon dioxide (CO₂) emissions after improvements have been carried out. The higher the rating the lower the CO₂ emissions. (CO₂ emissions in tonnes / year)"
  },
  "energy-consumption-current": {
     "id": "ENERGY_CONSUMPTION_CURRENT",
     "type": "float",
     "description": "Current estimated total energy consumption for the property in a 12 month period (kWh/m2). Displayed on EPC as the current primary energy use per square metre of floor area."
  },
  "energy-consumption-potential": {
     "id": "ENERGY_CONSUMPTION_POTENTIAL",
     "type": "float",
     "description": "Estimated potential total energy consumption for the Property in a 12 month period. Value is Kilowatt Hours per Square Metre (kWh/m²)"
  },
  "co₂-emissions-current": {
     "id": "CO2_EMISSIONS_CURRENT",
     "type": "decimal",
     "description": "CO₂ emissions per year in tonnes/year."
  },
  "co₂-emiss-curr-per-floor-area": {
     "id": "CO2_EMISS_CURR_PER_FLOOR_AREA",
     "type": "decimal",
     "description": "CO₂ emissions per square metre floor area per year in kg/m²"
  },
  "co₂-emissions-potential": {
     "id": "CO2_EMISSIONS_POTENTIAL",
     "type": "decimal",
     "description": "Estimated value in Tonnes per Year of the total CO₂ emissions produced by the Property in 12 month period."
  },
  "lighting-cost-current": {
     "id": "LIGHTING_COST_CURRENT",
     "type": "float",
     "description": "GBP. Current estimated annual energy costs for lighting the property."
  },
  "lighting-cost-potential": {
     "id": "LIGHTING_COST_POTENTIAL",
     "type": "float",
     "description": "GBP. Potential estimated annual energy costs for lighting the property after improvements have been made."
  },
  "heating-cost-current": {
     "id": "HEATING_COST_CURRENT",
     "type": "float",
     "description": "GBP. Current estimated annual energy costs for heating the property."
  },
  "heating-cost-potential": {
     "id": "HEATING_COST_POTENTIAL",
     "type": "float",
     "description": "GBP. Potential annual energy costs for lighting the property after improvements have been made."
  },
  "hot-water-cost-current": {
     "id": "HOT_WATER_COST_CURRENT",
     "type": "float",
     "description": "GBP. Current estimated annual energy costs for hot water"
  },
  "hot-water-cost-potential": {
     "id": "HOT_WATER_COST_POTENTIAL",
     "type": "float",
     "description": "GBP. Potential estimated annual energy costs for hot water after improvements have been made."
  },
  "total-floor-area": {
     "id": "TOTAL_FLOOR_AREA",
     "type": "decimal",
     "description": "The total useful floor area is the total of all enclosed spaces measured to the internal face of the external walls, i.e. the gross floor area as measured in accordance with the guidance issued from time to time by the Royal Institute of Chartered Surveyors or by a body replacing that institution. (m²)"
  },
  "energy-tariff": {
     "id": "ENERGY_TARIFF",
     "type": "varchar 16",
     "description": "Type of electricity tariff for the property, e.g. single."
  },
  "mains-gas-flag": {
     "id": "MAINS_GAS_FLAG",
     "type": "varchar 1",
     "description": "Whether mains gas is available. Yes means that there is a gas meter or a gas-burning appliance in the dwelling. A closed-off gas pipe does not count."
  },
  "floor-level": {
     "id": "FLOOR_LEVEL",
     "type": "varchar 13",
     "description": "Flats and maisonettes only. Floor level relative to the lowest level of the property (0 for ground floor). If there is a basement, the basement is level 0 and the other floors are from 1 upwards"
  },
  "flat-top-storey": {
     "id": "FLAT_TOP_STOREY",
     "type": "varchar 1",
     "description": "Whether the flat is on the top storey"
  },
  "flat-storey-count": {
     "id": "FLAT_STOREY_COUNT",
     "type": "int",
     "description": "The number of storeys in the apartment block."
  },
  "main-heating-controls": {
     "id": "MAIN_HEATING_CONTROLS",
     "type": "varchar 19",
     "description": "Type of main heating controls. Includes both main heating systems if there are two."
  },
  "multi-glaze-proportion": {
     "id": "MULTI_GLAZE_PROPORTION",
     "type": "float",
     "description": "The estimated banded range (e.g. 0% - 10%) of the total glazed area of the Property that is multiple glazed."
  },
  "glazed-type": {
     "id": "GLAZED_TYPE",
     "type": "varchar 45",
     "description": "The type of glazing. From British Fenestration Rating Council or manufacturer declaration, one of; single; double; triple."
  },
  "glazed-area": {
     "id": "GLAZED_AREA",
     "type": "varchar 22",
     "description": "Ranged estimate of the total glazed area of the Habitable Area."
  },
  "extension-count": {
     "id": "EXTENSION_COUNT",
     "type": "float",
     "description": "The number of extensions added to the property. Between 0 and 4."
  },
  "number-habitable-rooms": {
     "id": "NUMBER_HABITABLE_ROOMS",
     "type": "float",
     "description": "Habitable rooms include any living room, sitting room, dining room, bedroom, study and similar; and also a non-separated conservatory. A kitchen/diner having a discrete seating area (with space for a table and four chairs) also counts as a habitable room. A non-separated conservatory adds to the habitable room count if it has an internal quality door between it and the dwelling. Excluded from the room count are any room used solely as a kitchen, utility room, bathroom, cloakroom, en-suite accommodation and similar and any hallway, stairs or landing; and also any room not having a window."
  },
  "number-heated-rooms": {
     "id": "NUMBER_HEATED_ROOMS",
     "type": "float",
     "description": "The number of heated rooms in the property if more than half of the habitable rooms are not heated."
  },
  "low-energy-lighting": {
     "id": "LOW_ENERGY_LIGHTING",
     "type": "int",
     "description": "The percentage of low energy lighting present in the property as a percentage of the total fixed lights in the property. 0% indicates that no low-energy lighting is present."
  },
  "number-open-fireplaces": {
     "id": "NUMBER_OPEN_FIREPLACES",
     "type": "int",
     "description": "The number of Open Fireplaces in the Property. An Open Fireplace is a fireplace that still allows air to pass between the inside of the Property and the outside."
  },
  "hotwater-description": {
     "id": "HOTWATER_DESCRIPTION",
     "type": "varchar 95",
     "description": "Overall description of the property feature"
  },
  "hot-water-energy-eff": {
     "id": "HOT_WATER_ENERGY_EFF",
     "type": "varchar 9",
     "description": "Energy efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "hot-water-env-eff": {
     "id": "HOT_WATER_ENV_EFF",
     "type": "varchar 9",
     "description": "Environmental efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "floor-description": {
     "id": "FLOOR_DESCRIPTION",
     "type": "varchar 91",
     "description": "Overall description of the property feature"
  },
  "floor-energy-eff": {
     "id": "FLOOR_ENERGY_EFF",
     "type": "varchar 9",
     "description": "Energy efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "floor-env-eff": {
     "id": "FLOOR_ENV_EFF",
     "type": "varchar 9",
     "description": "Environmental efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "windows-description": {
     "id": "WINDOWS_DESCRIPTION",
     "type": "varchar 54",
     "description": "Overall description of the property feature"
  },
  "windows-energy-eff": {
     "id": "WINDOWS_ENERGY_EFF",
     "type": "varchar 9",
     "description": "Energy efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "windows-env-eff": {
     "id": "WINDOWS_ENV_EFF",
     "type": "varchar 9",
     "description": "WINDOWS. Environmental efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "walls-description": {
     "id": "WALLS_DESCRIPTION",
     "type": "varchar 121",
     "description": "Overall description of the property feature"
  },
  "walls-energy-eff": {
     "id": "WALLS_ENERGY_EFF",
     "type": "varchar 9",
     "description": "Energy efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "walls-env-eff": {
     "id": "WALLS_ENV_EFF",
     "type": "varchar 9",
     "description": "Environmental efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "secondheat-description": {
     "id": "SECONDHEAT_DESCRIPTION",
     "type": "varchar 97",
     "description": "Overall description of the property feature"
  },
  "sheating-energy-eff": {
     "id": "SHEATING_ENERGY_EFF",
     "type": "varchar 9",
     "description": "Energy efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "sheating-env-eff": {
     "id": "SHEATING_ENV_EFF",
     "type": "varchar 9",
     "description": "Environmental efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "roof-description": {
     "id": "ROOF_DESCRIPTION",
     "type": "varchar 92",
     "description": "Overall description of the property feature"
  },
  "roof-energy-eff": {
     "id": "ROOF_ENERGY_EFF",
     "type": "varchar 9",
     "description": "Energy efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "roof-env-eff": {
     "id": "ROOF_ENV_EFF",
     "type": "varchar 9",
     "description": "Environmental efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "mainheat-description": {
     "id": "MAINHEAT_DESCRIPTION",
     "type": "varchar 140",
     "description": "Overall description of the property feature"
  },
  "mainheat-energy-eff": {
     "id": "MAINHEAT_ENERGY_EFF",
     "type": "varchar 9",
     "description": "Energy efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "mainheat-env-eff": {
     "id": "MAINHEAT_ENV_EFF",
     "type": "varchar 9",
     "description": "Environmental efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "mainheatcont-description": {
     "id": "MAINHEATCONT_DESCRIPTION",
     "type": "varchar 96",
     "description": "Overall description of the property feature"
  },
  "mainheatc-energy-eff": {
     "id": "MAINHEATC_ENERGY_EFF",
     "type": "varchar 9",
     "description": "Energy efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "mainheatc-env-eff": {
     "id": "MAINHEATC_ENV_EFF",
     "type": "varchar 9",
     "description": "Environmental efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "lighting-description": {
     "id": "LIGHTING_DESCRIPTION",
     "type": "varchar 91",
     "description": "Overall description of property feature. Total number of fixed lighting outlets and total number of low-energy fixed lighting outlets"
  },
  "lighting-energy-eff": {
     "id": "LIGHTING_ENERGY_EFF",
     "type": "varchar 9",
     "description": "Energy efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "lighting-env-eff": {
     "id": "LIGHTING_ENV_EFF",
     "type": "varchar 9",
     "description": "Environmental efficiency rating. One of: very good; good; average; poor; very poor. On actual energy certificate shown as one to five star rating."
  },
  "main-fuel": {
     "id": "MAIN_FUEL",
     "type": "varchar 93",
     "description": "The type of fuel used to power the central heating e.g. Gas, Electricity"
  },
  "wind-turbine-count": {
     "id": "WIND_TURBINE_COUNT",
     "type": "float",
     "description": "Number of wind turbines; 0 if none."
  },
  "heat-loss-corridor": {
     "id": "HEAT_LOSS_CORRIDOR",
     "type": "varchar 17",
     "description": "Flats and maisonettes only. Indicates that the flat contains a corridor through which heat is lost. Heat loss corridor, one of: no corridor; heated corridor; unheated corridor"
  },
  "unheated-corridor-length": {
     "id": "UNHEATED_CORRIDOR_LENGTH",
     "type": "decimal",
     "description": "The total length of unheated corridor in the flat. Only populated if flat or maisonette contains unheated corridor. If unheated corridor, length of sheltered wall (m²)."
  },
  "floor-height": {
     "id": "FLOOR_HEIGHT",
     "type": "decimal",
     "description": "Average height of the storey in metres."
  },
  "photo-supply": {
     "id": "PHOTO_SUPPLY",
     "type": "float",
     "description": "Percentage of photovoltaic area as a percentage of total roof area. 0% indicates that a Photovoltaic Supply is not present in the property."
  },
  "solar-water-heating-flag": {
     "id": "SOLAR_WATER_HEATING_FLAG",
     "type": "varchar 1",
     "description": "Indicates whether the heating in the Property is solar powered."
  },
  "mechanical-ventilation": {
     "id": "MECHANICAL_VENTILATION",
     "type": "varchar 30",
     "description": "Identifies the type of mechanical ventilation the property has. This is required for the RdSAP calculation."
  },
  "address": {
     "id": "ADDRESS",
     "type": "",
     "description": "Field containing the concatenation of address1, address2 and address3. Note that post code is recorded separately."
  },
  "local-authority-name": {
     "id": "LOCAL_AUTHORITY_LABEL",
     "type": "",
     "description": "The name of the local authority area in which the building is located. This field is for additional information only and should not be relied upon: please refer to the Local Authority ONS Code."
  },
  "constituency-name": {
     "id": "CONSTITUENCY_LABEL",
     "type": "",
     "description": "The name of the parliamentary constituency in which the building is located. This field is for additional information only and should not be relied upon: please refer to the Constituency ONS Code."
  },
  "post-town": {
     "id": "POSTTOWN",
     "type": "varchar 37",
     "description": "The post town of the property"
  },
  "construction-age-band": {
     "id": "CONSTRUCTION_AGE_BAND",
     "type": "varchar 31",
     "description": "Age band when building part constructed. England & Wales only. One of: before 1900; 1900-1929; 1930-1949; 1950-1966; 1967-1975; 1976-1982; 1983-1990; 1991-1995; 1996-2002; 2003-2006; 2007-2011; 2012 onwards."
  },
  "lodgement-datetime": {
     "id": "LODGEMENT_DATETIME",
     "type": "datetime2",
     "description": "Date and time lodged on the Energy Performance of Buildings Register."
  },
  "tenure": {
     "id": "TENURE",
     "type": "varchar 100",
     "description": "Describes the tenure type of the property. One of: Owner-occupied; Rented (social); Rented (private)."
  },
  "fixed-lighting-outlets-count": {
     "id": "FIXED_LIGHTING_OUTLETS_COUNT",
     "type": "float",
     "description": "The number of fixed lighting outlets."
  },
  "low-energy-fixed-lighting-outlets-count": {
     "id": "LOW_ENERGY_FIXED_LIGHT_COUNT",
     "type": "float",
     "description": "The number of low-energy fixed lighting outlets."
  },
  "uprn": {
     "id": "UPRN",
     "type": "int",
     "description": "The UPRN submitted by an assessor or alternatively from the department’s address matching algorithm."
  },
  "uprn-source": {
     "id": "UPRN_SOURCE",
     "type": "varchar 15",
     "description": "Populated with the values "Energy Assessor" or "Address Matched" to show how the UPRN was populated."
  },
  "report-type": {
     "id": "REPORT_TYPE",
     "type": "int",
     "description": "Type of assessment carried out on the building, for domestic dwellings this is either a SAP (Standard Assessment Procedure) or a Reduced SAP. 100: RdSAP (Reduced SAP for existing buildings) and 101: SAP (full Sap for new dwellings, including conversions and change of use). This variable will help distinguish between new and existing dwellings."
  },
  "lmk-key": {
     "id": "LMK_KEY",
     "type": "varchar 64",
     "description": "Individual lodgement identifier. Guaranteed to be unique and can be used to identify a certificate in the downloads and the API."
  },
  "improvement-item": {
     "id": "IMPROVEMENT_ITEM",
     "type": "int",
     "description": "Used to order the recommendations on the output EPC."
  },
  "improvement-summary-text": {
     "id": "IMPROVEMENT_SUMMARY_TEXT",
     "type": "varchar 63",
     "description": "A short description of the suggested improvement."
  },
  "improvement-description-text": {
     "id": "IMPROVEMENT_DESCR_TEXT",
     "type": "varchar 1142",
     "description": "Detailed description of the suggested improvement."
  },
  "improvement-id": {
     "id": "IMPROVEMENT_ID",
     "type": "int",
     "description": "Code number associated with the improvement measure."
  },
  "improvement-id-text": {
     "id": "IMPROVEMENT_ID_TEXT",
     "type": "varchar 63",
     "description": "The text associated with the improvement measure."
  },
  "indicative-cost": {
     "id": "INDICATIVE_COST",
     "type": "varchar 38",
     "description": "The indicative costs are the cost of installed recommendation measures, which are fixed no matter the type of house being assessed. These are displayed as a cost range on the Energy Performance Certificate as costs vary between individual suppliers."
  },
}
