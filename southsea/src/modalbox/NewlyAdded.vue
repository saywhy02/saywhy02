<template>
    <div id="newLy">
        <!-- Form -->
        <!-- 新增生产主体 -->
        <el-dialog title="新增生产主体" :visible.sync="dialogFormVisible">
            <div class="el-card is-always-shadow">
                <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                    <!-- 个体户 -->
                    <el-tab-pane label="个体户" name="first">
                        <div class="Individual">
                            <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                            >
                                <!-- 姓名 -->
                                <el-form-item
                                    label="姓名"
                                    label-width="150px"
                                    prop="name"
                                >
                                    <el-input
                                        v-model="ruleForm.name"
                                        placeholder="请输入姓名"
                                        autocomplete="off"
                                        maxlength="30"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 联系电话 -->
                                <el-form-item
                                    label="联系电话"
                                    label-width="150px"
                                    prop="number"
                                >
                                    <el-input
                                        v-model="ruleForm.number"
                                        placeholder="请输入联系电话"
                                        autocomplete="off"
                                        maxlength="11"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 身份证 -->
                                <el-form-item
                                    label="身份证"
                                    label-width="150px"
                                    prop="identity_card"
                                >
                                    <el-input
                                        v-model="ruleForm.identity_card"
                                        placeholder="请输入身份证"
                                        autocomplete="off"
                                        maxlength="18"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 选择镇街 -->
                                <div id="region">
                                    <el-form-item
                                        label="选择镇街"
                                        label-width="150px"
                                        prop="region"
                                    >
                                        <el-select
                                            v-model="ruleForm.region"
                                            placeholder="请选择"
                                        >
                                            <el-option
                                                label="桂城街道"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="九江镇"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="西樵镇"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="丹灶镇"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="狮山镇"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="大沥镇"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="里水镇"
                                                value="beijing"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>

                                    <!-- 选择村居 -->
                                    <el-form-item
                                        label="选择村居"
                                        label-width="180px"
                                        prop="region"
                                    >
                                        <el-select
                                            v-model="ruleForm.region"
                                            placeholder="请选择"
                                        >
                                            <el-option
                                                label="沙涌村"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="草场村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="河村村"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="甘蕉村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="胜利村"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="大步村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="洲村村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="大冲村"
                                                value="beijing"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                </div>

                                <!-- 地址 -->
                                <el-form-item
                                    label="地址"
                                    label-width="150px"
                                    prop="address"
                                >
                                    <el-input
                                        v-model="ruleForm.address"
                                        placeholder="请输入地址"
                                        autocomplete="off"
                                        maxlength="130"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 基地名称 -->
                                <el-form-item
                                    label="基地名称"
                                    label-width="150px"
                                    prop="base_name"
                                >
                                    <el-input
                                        v-model="ruleForm.base_name"
                                        placeholder="请输入基地名称"
                                        autocomplete="off"
                                        maxlength="30"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <el-form-item
                                    label="行业"
                                    label-width="150px"
                                    prop="resource"
                                >
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio label="种植业"></el-radio>
                                        <el-radio label="渔业"></el-radio>
                                    </el-radio-group>
                                </el-form-item>

                                <!-- 主要产品 -->
                                <el-form-item
                                    label="主要产品"
                                    label-width="150px"
                                    prop="type"
                                >
                                    <el-checkbox-group v-model="ruleForm.type">
                                        <el-checkbox
                                            label="水产品"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="粮食"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="薯类"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="蔬菜"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="苗木"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="瓜果"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="茶叶"
                                            name="type"
                                        ></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>

                                <!-- 年产值（万元） -->
                                <el-form-item
                                    label="年产值（万元）"
                                    label-width="150px"
                                    prop="annual"
                                >
                                    <el-input
                                        v-model="ruleForm.annual"
                                        placeholder="(去年)"
                                        autocomplete="off"
                                        maxlength="9"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <el-form-item
                                    label="个体户介绍"
                                    label-width="150px"
                                    prop="desc"
                                >
                                    <el-input
                                        type="textarea"
                                        autocomplete="off"
                                        maxlength="500"
                                        show-word-limit
                                        v-model="ruleForm.desc"
                                    ></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="图片资料"
                                    label-width="150px"
                                    prop="picture"
                                >
                                    <el-upload
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        list-type="picture-card"
                                        :on-preview="handlePictureCardPreview"
                                        :on-remove="handleRemove"
                                    >
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                    <el-dialog :visible.sync="dialogVisible">
                                        <img
                                            width="100%"
                                            :src="dialogImageUrl"
                                            alt=""
                                        />
                                    </el-dialog>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-tab-pane>

                    <!-- 合作社 -->
                    <el-tab-pane label="合作社" name="second">
                        <div class="Individual">
                            <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                            >
                                <!-- 合作社（工商名称） -->
                                <el-form-item
                                    label="合作社（工商名称）"
                                    label-width="150px"
                                    prop="name"
                                >
                                    <el-input
                                        v-model="ruleForm.name"
                                        autocomplete="off"
                                        maxlength="30"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 基地名称 -->
                                <el-form-item
                                    label="基地名称"
                                    label-width="150px"
                                    prop="base_name"
                                >
                                    <el-input
                                        v-model="ruleForm.base_name"
                                        autocomplete="off"
                                        maxlength="30"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 行业 -->
                                <el-form-item
                                    label="行业"
                                    label-width="150px"
                                    prop="resource"
                                >
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio label="种植业"></el-radio>
                                        <el-radio label="渔业"></el-radio>
                                    </el-radio-group>
                                </el-form-item>

                                <!-- 主要产品 -->
                                <el-form-item
                                    label="主要产品"
                                    label-width="150px"
                                    prop="type"
                                >
                                    <el-checkbox-group v-model="ruleForm.type">
                                        <el-checkbox
                                            label="水产品"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="粮食"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="薯类"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="蔬菜"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="苗木"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="瓜果"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="茶叶"
                                            name="type"
                                        ></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>

                                <!-- 年产值（万元） -->
                                <el-form-item
                                    label="年产值（万元）"
                                    label-width="150px"
                                    prop="annual"
                                >
                                    <el-input
                                        v-model="ruleForm.annual"
                                        placeholder="(去年)"
                                    ></el-input>
                                </el-form-item>

                                <!-- 选择镇街 -->
                                <div id="region">
                                    <el-form-item
                                        label="选择镇街"
                                        label-width="150px"
                                        prop="region"
                                    >
                                        <el-select
                                            v-model="ruleForm.region"
                                            placeholder="请选择"
                                        >
                                            <el-option
                                                label="桂城街道"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="九江镇"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="西樵镇"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="丹灶镇"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="狮山镇"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="大沥镇"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="里水镇"
                                                value="beijing"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>

                                    <!-- 选择村居 -->
                                    <el-form-item
                                        label="选择村居"
                                        label-width="180px"
                                        prop="region"
                                    >
                                        <el-select
                                            v-model="ruleForm.region"
                                            placeholder="请选择"
                                        >
                                            <el-option
                                                label="沙涌村"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="草场村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="河村村"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="甘蕉村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="胜利村"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="大步村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="洲村村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="大冲村"
                                                value="beijing"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                </div>

                                <!-- 地址 -->
                                <el-form-item
                                    label="地址"
                                    label-width="150px"
                                    prop="address"
                                >
                                    <el-input
                                        v-model="ruleForm.address"
                                        placeholder="请输入地址"
                                        autocomplete="off"
                                        maxlength="130"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 联系人 -->
                                <el-form-item
                                    label="联系人"
                                    label-width="150px"
                                    prop="contacts"
                                >
                                    <el-input
                                        v-model="ruleForm.contacts"
                                        placeholder="请输入联系人"
                                        autocomplete="off"
                                        maxlength="30"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 联系电话 -->
                                <el-form-item
                                    label="联系电话"
                                    label-width="150px"
                                    prop="contact_number"
                                >
                                    <el-input
                                        v-model="ruleForm.contact_number"
                                        placeholder="请输入联系电话"
                                        autocomplete="off"
                                        maxlength="11"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 基地名称 -->
                                <el-form-item
                                    label="基地名称"
                                    label-width="150px"
                                    prop="base_name"
                                >
                                    <el-input
                                        v-model="ruleForm.base_name"
                                        placeholder="请输入基地名称"
                                        autocomplete="off"
                                        maxlength="30"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 组织机构代码 -->
                                <el-form-item
                                    label="组织机构代码"
                                    label-width="150px"
                                    prop="Organization_code"
                                >
                                    <el-input
                                        v-model="ruleForm.Organization_code"
                                        placeholder="请输入组织机构代码"
                                        autocomplete="off"
                                        maxlength="18"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 统一社会信用代码 -->
                                <el-form-item
                                    label="统一社会信用代码"
                                    label-width="150px"
                                    prop="unified"
                                >
                                    <el-input
                                        v-model="ruleForm.unified"
                                        placeholder="请输入统一社会信用代码"
                                        autocomplete="off"
                                        maxlength="18"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 员工人数 -->
                                <el-form-item
                                    label="员工人数"
                                    label-width="150px"
                                    prop="number1"
                                >
                                    <el-input
                                        v-model="ruleForm.number1"
                                        placeholder="请输入员工人数"
                                    ></el-input>
                                </el-form-item>

                                <!-- 主体简介 -->
                                <el-form-item
                                    label="主体简介"
                                    label-width="150px"
                                    prop="introduction"
                                >
                                    <el-input
                                        type="textarea"
                                        autocomplete="off"
                                        maxlength="500"
                                        show-word-limit
                                        v-model="ruleForm.introduction"
                                    ></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="图片资料"
                                    label-width="150px"
                                    prop="picture"
                                >
                                    <el-upload
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        list-type="picture-card"
                                        :on-preview="handlePictureCardPreview"
                                        :on-remove="handleRemove"
                                    >
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                    <el-dialog :visible.sync="dialogVisible">
                                        <img
                                            width="100%"
                                            :src="dialogImageUrl"
                                            alt=""
                                        />
                                    </el-dialog>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-tab-pane>

                    <!-- 企业 -->
                    <el-tab-pane label="企业" name="third">
                        <div class="Individual">
                            <el-form
                                :model="ruleForm"
                                :rules="rules"
                                ref="ruleForm"
                            >
                                <!-- 企业 -->
                                <el-form-item
                                    label="企业（工商名称）"
                                    label-width="150px"
                                    prop="name"
                                >
                                    <el-input
                                        v-model="ruleForm.name"
                                        autocomplete="off"
                                        maxlength="30"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 基地名称 -->
                                <el-form-item
                                    label="基地名称"
                                    label-width="150px"
                                    prop="base_name"
                                >
                                    <el-input
                                        v-model="ruleForm.base_name"
                                        autocomplete="off"
                                        maxlength="30"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 行业 -->
                                <el-form-item
                                    label="行业"
                                    label-width="150px"
                                    prop="resource"
                                >
                                    <el-radio-group v-model="ruleForm.resource">
                                        <el-radio label="种植业"></el-radio>
                                        <el-radio label="渔业"></el-radio>
                                    </el-radio-group>
                                </el-form-item>

                                <!-- 主要产品 -->
                                <el-form-item
                                    label="主要产品"
                                    label-width="150px"
                                    prop="type"
                                >
                                    <el-checkbox-group v-model="ruleForm.type">
                                        <el-checkbox
                                            label="水产品"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="粮食"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="薯类"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="蔬菜"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="苗木"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="瓜果"
                                            name="type"
                                        ></el-checkbox>
                                        <el-checkbox
                                            label="茶叶"
                                            name="type"
                                        ></el-checkbox>
                                    </el-checkbox-group>
                                </el-form-item>

                                <!-- 年产值（万元） -->
                                <el-form-item
                                    label="年产值（万元）"
                                    label-width="150px"
                                    prop="annual"
                                >
                                    <el-input
                                        v-model="ruleForm.annual"
                                        placeholder="(去年)"
                                    ></el-input>
                                </el-form-item>

                                <!-- 选择镇街 -->
                                <div id="region">
                                    <el-form-item
                                        label="选择镇街"
                                        label-width="150px"
                                        prop="region"
                                    >
                                        <el-select
                                            v-model="ruleForm.region"
                                            placeholder="请选择"
                                        >
                                            <el-option
                                                label="桂城街道"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="九江镇"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="西樵镇"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="丹灶镇"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="狮山镇"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="大沥镇"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="里水镇"
                                                value="beijing"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>

                                    <!-- 选择村居 -->
                                    <el-form-item
                                        label="选择村居"
                                        label-width="180px"
                                        prop="region"
                                    >
                                        <el-select
                                            v-model="ruleForm.region"
                                            placeholder="请选择"
                                        >
                                            <el-option
                                                label="沙涌村"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="草场村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="河村村"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="甘蕉村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="胜利村"
                                                value="shanghai"
                                            ></el-option>
                                            <el-option
                                                label="大步村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="洲村村"
                                                value="beijing"
                                            ></el-option>
                                            <el-option
                                                label="大冲村"
                                                value="beijing"
                                            ></el-option>
                                        </el-select>
                                    </el-form-item>
                                </div>

                                <!-- 地址 -->
                                <el-form-item
                                    label="地址"
                                    label-width="150px"
                                    prop="address"
                                >
                                    <el-input
                                        v-model="ruleForm.address"
                                        placeholder="请输入地址"
                                        autocomplete="off"
                                        maxlength="130"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 联系人 -->
                                <el-form-item
                                    label="联系人"
                                    label-width="150px"
                                    prop="contacts"
                                >
                                    <el-input
                                        v-model="ruleForm.contacts"
                                        placeholder="请输入联系人"
                                        autocomplete="off"
                                        maxlength="30"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 联系电话 -->
                                <el-form-item
                                    label="联系电话"
                                    label-width="150px"
                                    prop="contact_number"
                                >
                                    <el-input
                                        v-model="ruleForm.contact_number"
                                        placeholder="请输入联系电话"
                                        autocomplete="off"
                                        maxlength="11"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 基地名称 -->
                                <el-form-item
                                    label="基地名称"
                                    label-width="150px"
                                    prop="base_name"
                                >
                                    <el-input
                                        v-model="ruleForm.base_name"
                                        placeholder="请输入基地名称"
                                        autocomplete="off"
                                        maxlength="30"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 组织机构代码 -->
                                <el-form-item
                                    label="组织机构代码"
                                    label-width="150px"
                                    prop="Organization_code"
                                >
                                    <el-input
                                        v-model="ruleForm.Organization_code"
                                        placeholder="请输入组织机构代码"
                                        autocomplete="off"
                                        maxlength="18"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 统一社会信用代码 -->
                                <el-form-item
                                    label="统一社会信用代码"
                                    label-width="150px"
                                    prop="unified"
                                >
                                    <el-input
                                        v-model="ruleForm.unified"
                                        placeholder="请输入统一社会信用代码"
                                        autocomplete="off"
                                        maxlength="18"
                                        show-word-limit
                                    ></el-input>
                                </el-form-item>

                                <!-- 员工人数 -->
                                <el-form-item
                                    label="员工人数"
                                    label-width="150px"
                                    prop="number1"
                                >
                                    <el-input
                                        v-model="ruleForm.number1"
                                        placeholder="请输入员工人数"
                                    ></el-input>
                                </el-form-item>

                                <!-- 主体简介 -->
                                <el-form-item
                                    label="主体简介"
                                    label-width="150px"
                                    prop="introduction"
                                >
                                    <el-input
                                        type="textarea"
                                        autocomplete="off"
                                        maxlength="500"
                                        show-word-limit
                                        v-model="ruleForm.introduction"
                                    ></el-input>
                                </el-form-item>
                                <el-form-item
                                    label="图片资料"
                                    label-width="150px"
                                    prop="picture"
                                >
                                    <el-upload
                                        action="https://jsonplaceholder.typicode.com/posts/"
                                        list-type="picture-card"
                                        :on-preview="handlePictureCardPreview"
                                        :on-remove="handleRemove"
                                    >
                                        <i class="el-icon-plus"></i>
                                    </el-upload>
                                    <el-dialog :visible.sync="dialogVisible">
                                        <img
                                            width="100%"
                                            :src="dialogImageUrl"
                                            alt=""
                                        />
                                    </el-dialog>
                                </el-form-item>
                            </el-form>
                        </div>
                    </el-tab-pane>
                </el-tabs>

                <!-- 按钮 保存 | 关闭-->
                <div
                    slot="footer"
                    class="dialog-footer"
                    style="margin-left: 150px; margin-bottom: 22px"
                >
                    <el-button type="primary" @click="dialogFormVisible = false"
                        >保存</el-button
                    >
                    <el-button type="info" @click="dialogFormVisible = false"
                        >关闭</el-button
                    >
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'newlyAdded',
    data() {
        return {
            dialogTableVisible: false,
            dialogFormVisible: false,
            activeName: 'first', //选项卡第一个选项

            dialogImageUrl: '',
            dialogVisible: false,

            ruleForm: {
                name: '',
                number: '',
                identity_card: '',
                region: '',
                address: '',
                base_name: '',
                annual: '',
                type: [],
                resource: '',
                desc: '',
                contacts: '',
                contact_number: '',
                Organization_code: '',
                unified: '',
                number1: '',
                introduction: '',
            },
            rules: {
                /* 姓名 */
                name: '',

                /* 联系电话 */
                number: [
                    {
                        required: true,
                        message: '请输入正确的联系电话',
                        trigger: 'blur',
                    },
                ],

                /* 身份证号 */
                identity_card: [
                    {
                        required: true,
                        message: '身份证号不能为空',
                        trigger: 'blur',
                    },
                ],

                /* 请选择 */
                region: [
                    { required: true, message: '请选择', trigger: 'change' },
                ],

                /* 地址 */
                address: [
                    {
                        required: true,
                        message: '必填项不能为空',
                        trigger: 'blur',
                    },
                ],

                /* 联系人 */
                contacts: [
                    {
                        required: true,
                        message: '姓名不能为空',
                        trigger: 'blur',
                    },
                ],

                /* 联系电话 */
                contact_number: [
                    {
                        required: true,
                        message: '请输入正确的手机号',
                        trigger: 'blur',
                    },
                ],

                /* 组织机构代码 */
                Organization_code: [
                    /* { required: true, message: "请输入正确的手机号", trigger: "blur" }, */
                ],

                /* 基地名称 */
                base_name: [
                    {
                        required: true,
                        message: '必填项不能为空',
                        trigger: 'blur',
                    },
                ],

                /* 统一社会信用代码 */
                unified: [
                    /* { required: true, message: "必填项不能为空", trigger: "blur" }, */
                ],

                /* 员工人数 */
                number1: [
                    {
                        required: true,
                        message: '必填项不能为空',
                        trigger: 'blur',
                    },
                ],

                type: [
                    /* {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          }, */
                ],

                /* 年产值（万元） */
                annual: [
                    {
                        required: true,
                        message: '必填项不能为空',
                        trigger: 'blur',
                    },
                ],

                /* 活动资源 */
                resource: [
                    {
                        required: true,
                        message: '请选择活动资源',
                        trigger: 'change',
                    },
                ],
                /* 活动形式 */
                desc: [
                    {
                        required: true,
                        message: '请填写活动形式',
                        trigger: 'blur',
                    },
                ],

                /* 主体简介 */
                introduction: [
                    /* { required: true, message: "请填写活动形式", trigger: "blur" } */
                ],
            },
        };
    },

    methods: {
        handleClick(tab, event) {
            /* console.log(tab, event); */
        },

        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },

        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
    },
};
</script>

<style scoped>
.el-card {
    width: 98%;
    margin: 15px auto 0;
}
.el-card {
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    transition: 0.3s;
}
.ProductionBase .el-card {
    width: 98%;
    margin: 15px auto 0;
}
.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}

.Individual input {
    width: 98%;
}

.el-select {
    width: 96%;
}

.el-textarea {
    width: 98%;
}

.el-input .el-input__count .el-input__count-inner {
    background: #fff;
    line-height: initial;
    display: inline-block;
    padding: 0 5px;
    margin: 0 10px;
}

#region {
    display: flex;
    justify-content: space-between;
}
</style>
