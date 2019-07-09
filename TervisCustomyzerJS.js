import { Add_MemberScriptProperty, New_HashTableIndex, ConvertFrom_StringUsingRegexCaptureGroup } from '@tervis/tervisutilityjs/TervisUtilityJS.js'
import { Get_SizeAndFormTypeMetaData, Get_ColorCodeToMarketingNameMapping } from '@tervis/terviscustomyzercontstants'

export async function Get_CustomyzerPrintImageTemplateSizeAndFormType ({
    $PrintImageTemplateName
}) {
    var $PrintImageTemplateNameToSizeAndFormTypeIndex = await Get_PrintImageTemplateNameToSizeAndFormTypeIndex()
    let {Size, FormType} = $PrintImageTemplateNameToSizeAndFormTypeIndex[$PrintImageTemplateName]
    
    if (Array.isArray(FormType)) {
        var $FormType = FormType[0]
    } else {
        var $FormType = FormType
    }
    
    return {$Size: Size, $FormType}
}

export async function Get_CustomyzerImageTemplateName ({
    $Size,
    $FormType,
    $TemplateType,
    $PrintTemplateType
}) {
    var $SizeAndFormTypeToImageTemplateNamesIndex = await Get_SizeAndFormTypeToImageTemplateNamesIndex()
    let $Template = $SizeAndFormTypeToImageTemplateNamesIndex[`${$Size}${$FormType}`].ImageTemplateName[$TemplateType]
    if (!$PrintTemplateType) {
        return $Template
    } else {
        return $Template[$PrintTemplateType]
    }
}


export async function Get_SizeAndFormTypeMetaDataUsingIndex ({
    $Size,
    $FormType
}) {
    var $SizeAndFormTypeToImageTemplateNamesIndex = await Get_SizeAndFormTypeToImageTemplateNamesIndex()
    return $SizeAndFormTypeToImageTemplateNamesIndex[`${$Size}${$FormType}`]
}

var $SizeAndFormTypeMetaData
async function Get_SizeAndFormTypeMetaDataWithCustomProperties () {
    if (!$SizeAndFormTypeMetaData) {
        $SizeAndFormTypeMetaData = await Get_SizeAndFormTypeMetaData()

        Add_MemberScriptProperty({$InputObject: $SizeAndFormTypeMetaData, $Name: "SizeAndFormTypes", $Value: function (){
            if (Array.isArray(this.FormType)) {
                var $SizeAndFormTypes = []
                for (const $FromTypeInstance of this.FormType) {
                    $SizeAndFormTypes.push(`${this.Size}${$FromTypeInstance}`)
                }
                return $SizeAndFormTypes
            } else {
                return `${this.Size}${this.FormType}`
            }
        }})
        
        Add_MemberScriptProperty ({$InputObject: $SizeAndFormTypeMetaData, $Name: "PrintImageTemplateNames", $Value: function (){
            if (this.ImageTemplateName && this.ImageTemplateName.Print) {
                return Object.values(this.ImageTemplateName.Print)
            }
        }})
    }
    return $SizeAndFormTypeMetaData
}

var $SizeAndFormTypeToImageTemplateNamesIndex
async function Get_SizeAndFormTypeToImageTemplateNamesIndex () {
    if (!$SizeAndFormTypeToImageTemplateNamesIndex) {
        var $SizeAndFormTypeMetaData = await Get_SizeAndFormTypeMetaDataWithCustomProperties()
        $SizeAndFormTypeToImageTemplateNamesIndex = New_HashTableIndex({$InputObject: $SizeAndFormTypeMetaData, $PropertyToIndex: "SizeAndFormTypes"})
    }
    
    return $SizeAndFormTypeToImageTemplateNamesIndex
}

var $PrintImageTemplateNameToSizeAndFormTypeIndex
async function Get_PrintImageTemplateNameToSizeAndFormTypeIndex () {
    if (!$PrintImageTemplateNameToSizeAndFormTypeIndex) {
        var $SizeAndFormTypeMetaData = await Get_SizeAndFormTypeMetaDataWithCustomProperties()
        $PrintImageTemplateNameToSizeAndFormTypeIndex = New_HashTableIndex({ $InputObject: $SizeAndFormTypeMetaData, $PropertyToIndex: "PrintImageTemplateNames"})
    }
    return $PrintImageTemplateNameToSizeAndFormTypeIndex
}

var $ColorCodeToMarketingNameIndex
export async function Get_ColorCodeToMarketingNameIndex () {
    if (!$ColorCodeToMarketingNameIndex) {
        var $ColorCodeToMarketingNameMapping = await Get_ColorCodeToMarketingNameMapping()
        $ColorCodeToMarketingNameIndex = New_HashTableIndex({ $InputObject: $ColorCodeToMarketingNameMapping, $PropertyToIndex: "ColorCode"})
    }
    return $ColorCodeToMarketingNameIndex
}

export function Get_SizeAndFormTypeFromString ({
    $String
  }) {
    var $Results = ConvertFrom_StringUsingRegexCaptureGroup({
      $Regex: /(?<$Size>\d*)(?<$FormType>\w*)/u,
      $String
    })

    if ($Results) {
      return $Results
    }
  }

export async function New_CustomyzerProjectProductVirtualURL ({
    $ProjectID,
    $Size,
    $FormType,
    $DecorationPositionXValue,
    $AsScene7SrcValue
}) {

    var $ElementPathsToShow = [
        "MAIN/GLARE"
    ]
    var $DecorationType
    if ($FormType === "SS") {
        $ElementPathsToShow.push(`MAIN/OUTER/SMOOTH/SS1`)
        $ElementPathsToShow.push(`MAIN/INNER/SMOOTH/SS1`)
        $DecorationType = "DPT"
    } else {
        if ($FormType !== "WAV") {
            $ElementPathsToShow.push(`MAIN/OUTER/SMOOTH/CL1`)
        } else {
            $ElementPathsToShow.push(`MAIN/OUTER/WAVY/CL1`)
        }
        $ElementPathsToShow.push(`MAIN/INNER/LINED/CL1`)
        $DecorationType = "WRA"
    }

    if ($FormType === "SIP") {
        $ElementPathsToShow.push(`MAIN/ACCESSORIES/LIDSIP/GY3`)
    } 
    
    if (($FormType === "SS" && $Size === 24) || ($FormType === "WB")) {
        $ElementPathsToShow.push(`MAIN/ACCESSORIES/LIDWB/GY1`)
    }

    var $ArtobardImageURL = New_TervisAdobeScene7CustomyzerArtboardImageURL({$ProjectID})
    var $RepeatedImageSource = New_TervisAdobeScene7URL({$AsScene7SrcValue: true, $ExternalURL: $ArtobardImageURL})
    
    var $DecorationSrc = New_TervisAdobeScene7WrapDecoration3TimesURL({
        $Size,
        $FormType,
        $AsScene7SrcValue: true,
        $DecorationType,
        $RepeatedImageSource
      })

    var $ProductVirtualURL = New_TervisAdobeScene7ProductVirtualURL({
        $Size,
        $FormType,
        $VignetteSuffix: 1,
        $DecorationType,
        $DecorationSrc,
        $DecorationPositionXValue,
        $ElementPathsToShow,
        $AsScene7SrcValue
    })

    return $ProductVirtualURL
}