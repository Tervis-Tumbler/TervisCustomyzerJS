import { Add_MemberScriptProperty, New_HashTableIndex } from '@tervis/tervisutilityjs'
import { Get_SizeAndFormTypeMetaData } from '@tervis/terviscustomyzercontstants'

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

var $SizeAndFormTypeMetaData

async function Get_SizeAndFormTypeMetaDataWithCustomProperties () {
    if (!$SizeAndFormTypeMetaData) {
        var $SizeAndFormTypeMetaData = await Get_SizeAndFormTypeMetaData()

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
