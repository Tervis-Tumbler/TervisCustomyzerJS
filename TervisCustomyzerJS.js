import {
    Initialize_TervisCustojmyzerServiceJS,
    Get_TervisCustomyzerServiceProject
} from '@tervis/terviscustomyzerservicejs'

export async function Get_TervisCustomyzerProjectProductSizeAndProductFormType ({
    $ProjectID,
    $EnvironmentName
}) {
    $EnvironmentName = $EnvironmentName ? $EnvironmentName : "Production"
    Initialize_TervisCustojmyzerServiceJS({$EnvironmentName})
    var $Project = await Get_TervisCustomyzerServiceProject ({$ProjectID})
    var {Size, FormType} = $Project.Product.Form
    return {
        $ProductFormType: FormType,
        $ProductSize: Size
    }
}